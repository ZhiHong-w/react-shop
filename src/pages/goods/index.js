import React, { memo,useEffect,useState } from 'react';
import { useDispatch,useSelector,shallowEqual} from 'react-redux';
import { Card,Table,Input, Row, Col, Button } from 'antd';

import { GoodsWrapper } from './style';

import Breadcrus from '../../components/breadcrumb';
import { breadGoods } from '../../common/bread-data';

//redux中的数据
import { getGoodsDispatch, 
    changeQueryInfoAction
} from './store/actionCreators';

//columns数据
import { columns } from '../../common/goods-data';

//分页组件
import Pagina from '../../components/pagination';

export default memo(function Goods() {
    //当前页数
    const [pagenum, setPagenum] = useState(1);
    //每页的数据条数
    const [pagesize, setPagesize] = useState(10);
    //搜索内容
    const [query, setQuery] = useState('');

    const { goodsList,total,queryInfo } = useSelector(state => ({
        goodsList: state.goods.goodsList,
        total: state.goods.total,
        queryInfo: state.goods.queryInfo
    }), shallowEqual);

    const dispatch = useDispatch();
    useEffect(() => {
        const queryInfo = {
            query: '',
            pagenum: 1,
            pagesize: 10
        }
        dispatch(getGoodsDispatch(queryInfo))
    }, [dispatch])

    //搜索框
    const onSearch = (value) => {
        setQuery(value);
        dispatch(changeQueryInfoAction({...queryInfo,query: value}))

        dispatch(getGoodsDispatch({ query: value, pagenum, pagesize }))
    }

    //添加商品按钮
    const showModal = () => {
       // dispatch(changeAddUserModalVisableAction(true));
    }

    //页面改变
    const onPageChange = (page, pageSize) => {
        // console.log(page,pagesize);
        setPagenum(page);
        setPagesize(pageSize);
        dispatch(changeQueryInfoAction({ ...queryInfo,pagenum:page,pagesize:pageSize}));

        dispatch(getGoodsDispatch({ query, pagenum: page, pagesize: pageSize }));
    }

    //条数改变
    const onSizeChange = (current, size) => {
        setPagesize(size);
        dispatch(changeQueryInfoAction({ ...queryInfo,pagesize: size}))

        dispatch(getGoodsDispatch({ query, pagenum, pagesize: size }));
    }

    return (
        <GoodsWrapper>
            <Breadcrus breadData={breadGoods}></Breadcrus>
            <Card>
                {/* 搜索和添加用户 */}
                <div className="goods-header">
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
                                size="large">添加商品</Button>
                            {/* 弹出框 */}
                            {/* <AddUserModal /> */}
                        </Col>
                    </Row>
                </div>
                {/* 表格 */}
                <Table columns={columns} dataSource={goodsList} pagination={false} bordered />
                {/* 分页 */}
                <div className="pagination">
                    <Pagina currentPage={pagenum}
                        pageSize={pagesize}
                        total={total}
                        onPageChange={onPageChange}
                        onSizeChange={onSizeChange}></Pagina>
                </div>
            </Card>
        </GoodsWrapper>
    )
})
