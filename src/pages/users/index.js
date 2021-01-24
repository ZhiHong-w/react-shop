/**
 * 用户管理中的用户列表
 */
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { Card, Table, Input, Row, Col, Button } from 'antd';
//样式
import { UsersWrapper } from './style';
//面包屑导航
import Breadcrus from '../../components/breadcrumb';
import { breadUsers } from '../../common/bread-data';
//action
import {
    changeUsersDispatch,
    changeAddUserModalVisableAction,
    changeQueryInfoAction
} from './store/actionCreators';
//table列
import { columns } from '../../common/user-data';

//分页组件
import Pagina from '../../components/pagination';
//modal
import AddUserModal from './cpns/addUserModal';

export default memo(function Users() {

    //当前页数
    const [pagenum, setPagenum] = useState(1);
    //每页的数据条数
    const [pagesize, setPagesize] = useState(2);
    //搜索内容
    const [query, setQuery] = useState('');

    const { userList, total,queryInfo } = useSelector(state => ({
        userList: state.user.userList,
        total: state.user.total,
        queryInfo: state.user.queryInfo
    }), shallowEqual);

    const dispatch = useDispatch();
    useEffect(() => {
        const queryInfo = {
            query: '',
            pagenum: 1,
            pagesize: 2
        }
        dispatch(changeUsersDispatch(queryInfo))
    }, [dispatch])

    //搜索框
    const onSearch = (value) => {
        setQuery(value);
        dispatch(changeQueryInfoAction({...queryInfo,query: value}))

        dispatch(changeUsersDispatch({ query: value, pagenum, pagesize }))
    }

    //添加用户按钮
    const showModal = () => {
        dispatch(changeAddUserModalVisableAction(true));
    }

    //页面改变
    const onPageChange = (page, pageSize) => {
        // console.log(page,pagesize);
        setPagenum(page);
        setPagesize(pageSize);
        dispatch(changeQueryInfoAction({ ...queryInfo,pagenum:page,pagesize:pageSize}));

        dispatch(changeUsersDispatch({ query, pagenum: page, pagesize: pageSize }));
    }

    //条数改变
    const onSizeChange = (current, size) => {
        setPagesize(size);
        dispatch(changeQueryInfoAction({ ...queryInfo,pagesize: size}))

        dispatch(changeUsersDispatch({ query, pagenum, pagesize: size }));
    }

    return (
        <UsersWrapper>
            {/* 面包屑导航 */}
            <Breadcrus breadData={breadUsers}></Breadcrus>
            <Card>
                {/* 搜索和添加用户 */}
                <div className="user-header">
                    <Row gutter="20">
                        <Col span="8">
                            <Input.Search placeholder="请输入内容"
                                onSearch={onSearch}
                                size="large"
                                allowClear />
                        </Col>
                        <Col span="4">
                            <Button type="primary"
                                onClick={showModal}
                                size="large">添加用户</Button>
                            {/* 弹出框 */}
                            <AddUserModal />
                        </Col>
                    </Row>
                </div>
                {/* 表格 */}
                <Table columns={columns}
                    dataSource={userList}
                    pagination={false} bordered></Table>
                {/* 分页 */}
                <div className="pagination">
                    <Pagina currentPage={pagenum}
                        pageSize={pagesize}
                        total={total}
                        onPageChange={onPageChange}
                        onSizeChange={onSizeChange}></Pagina>
                </div>
            </Card>
        </UsersWrapper>
    )
})
