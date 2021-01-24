/**
 * home主页
 */
import React, { memo, useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
//antdesign
import { Layout, Menu,message } from 'antd';
import {
    TeamOutlined,
    ControlOutlined,
    ShoppingOutlined,
    TableOutlined,
    LineChartOutlined,
    AppstoreOutlined
} from '@ant-design/icons';

import {
    changeMenuListsDispatch,
    changeSubMenuKeysAction
} from './store/actionCreators';

import { HomeWrapper } from './style';
import HeiMaImg from '../../assets/image/heima.png';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const icons = [
    <TeamOutlined />,
    <ControlOutlined />,
    <ShoppingOutlined />,
    <TableOutlined />,
    <LineChartOutlined />,
    <AppstoreOutlined />
]

export default memo(function Home(props) {
    const { route } = props;

    const activeKeys = window.sessionStorage.getItem('activeKeys');
    const selected = window.sessionStorage.getItem('selectedKeys');
    
    const ks = (activeKeys ? [activeKeys] : []);
    const ls = (selected ? selected : []);

    //slider折叠
    const [isCollapse, setIsCollapse] = useState(false);
    //收缩样式动画 React.useState(["125"]);
    const [openKeys, setOpenKeys] = useState(ks);
    //保存当前选中的菜单项 key 数组
    const [selectedKeys,setSelectedKeys] = useState(ls);

    const { menuLists, metaMessage, rootSubmenuKeys } = useSelector(state => ({
        menuLists: state.home.menuLists,
        metaMessage: state.home.metaMessage,
        rootSubmenuKeys: state.home.rootSubmenuKeys
    }), shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeMenuListsDispatch());
    }, [dispatch])

    useEffect(() => {
        if(metaMessage && metaMessage.msg && metaMessage.status !== 200){
            message.error({
                content: metaMessage.msg,
                key: 'home'
            })
        }
        const subMenuKeys = [];
        for (let i = 0; i < menuLists.length; i++) {
            subMenuKeys.push(menuLists[i].id.toString());
        }
        dispatch(changeSubMenuKeysAction(subMenuKeys));
    }, [dispatch,menuLists,metaMessage])
    
    //登出
    const loginOut = useCallback(() => {
        props.history.push('/login');
       // console.log(props.history);
    }, [props.history])
     
    //折叠slider
    const toggleCollapse = useCallback(() => {
        setIsCollapse(!isCollapse);
    }, [isCollapse])
    
    //点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁
    const onOpenChange = keys => {
       // console.log(keys);
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }
    
    //保存链接的激活状态
    const onSelect = (obj) => {
        setSelectedKeys(obj.selectedKeys);
        window.sessionStorage.setItem('activeKeys',[openKeys]);
        window.sessionStorage.setItem('selectedKeys',obj.selectedKeys);
    }
    
    //防止menuLists为null
    const menudata = menuLists || [];

    return (
        <HomeWrapper>
            <Layout className="home-content">
                <Header className="home-header">
                    <div className="left-header">
                        <img src={HeiMaImg} alt="" />
                        <span className="title">电商后台管理系统</span>
                    </div>
                    <button className="login-out" onClick={loginOut}>退出</button>
                </Header>
                <Layout>
                    <Sider className="home-sider" collapsed={isCollapse}>
                        <div className="toggle-button" onClick={toggleCollapse}>|||</div>
                        <Menu theme="dark"
                            mode="inline"
                            style={{ backgroundColor: "#333744" }}
                            openKeys={openKeys}
                            selectedKeys={selectedKeys}
                            onOpenChange={onOpenChange} onSelect={onSelect}>
                            {
                                 menudata.map((item, index) => {
                                    return (
                                        <SubMenu key={item.id}
                                            icon={icons[index]}
                                            title={item.authName}>
                                            {
                                                item.children.map((item2, indey) => {
                                                    return (
                                                        <Menu.Item key={item2.id}
                                                            icon={icons[menuLists.length]}
                                                            theme="dark" 
                                                            title={item2.authName}>
                                                                <NavLink to={'/home/' + item2.path}>{item2.authName}</NavLink>
                                                        </Menu.Item>
                                                    )
                                                })
                                            }
                                        </SubMenu>
                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Content className="home-right">
                        {renderRoutes(route.routes)}
                    </Content>
                </Layout>

            </Layout>
        </HomeWrapper>
    )
})
