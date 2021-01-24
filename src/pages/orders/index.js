import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Card, Table, Input, Row, Col } from 'antd';

import { OrdersWrapper } from './style';

import Breadcrus from '../../components/breadcrumb';
import { breadOrders } from '../../common/bread-data';

//redux中的数据
import {
    getOrdersDispatch,
    changeQueryInfoAction
} from './store/actionCreators';

//columns数据
import { columns } from '../../common/orders-data';

//分页组件
import Pagina from '../../components/pagination';

export default memo(function Orders() {
    //当前页数
    const [pagenum, setPagenum] = useState(1);
    //每页的数据条数
    const [pagesize, setPagesize] = useState(5);
    //搜索内容
    const [query, setQuery] = useState('');

    const { ordersList, total, queryInfo } = useSelector(state => ({
        ordersList: state.orders.ordersList,
        total: state.orders.total,
        queryInfo: state.orders.queryInfo
    }), shallowEqual);

    const dispatch = useDispatch();
    useEffect(() => {
        const queryInfo = {
            query: '',
            pagenum: 1,
            pagesize: 5
        }
        dispatch(getOrdersDispatch(queryInfo))
    }, [dispatch])

    //搜索框
    const onSearch = (value) => {
        setQuery(value);
        dispatch(changeQueryInfoAction({ ...queryInfo, query: value }))

        dispatch(getOrdersDispatch({ query: value, pagenum, pagesize }))
    }


    //页面改变
    const onPageChange = (page, pageSize) => {
        // console.log(page,pagesize);
        setPagenum(page);
        setPagesize(pageSize);
        dispatch(changeQueryInfoAction({ ...queryInfo, pagenum: page, pagesize: pageSize }));

        dispatch(getOrdersDispatch({ query, pagenum: page, pagesize: pageSize }));
    }

    //条数改变
    const onSizeChange = (current, size) => {
        setPagesize(size);
        dispatch(changeQueryInfoAction({ ...queryInfo, pagesize: size }))

        dispatch(getOrdersDispatch({ query, pagenum, pagesize: size }));
    }
    return (
        <OrdersWrapper>
            <Breadcrus breadData={breadOrders}></Breadcrus>
            <Card>
                {/* 搜索订单 */}
                <div className="orders-header">
                    <Row gutter="20">
                        <Col span="8">
                            <Input.Search placeholder="请输入内容"
                                onSearch={onSearch}
                                size="large"
                                allowClear />
                        </Col>
                    </Row>
                </div>
                {/* 表格 */}
                <Table columns={columns} dataSource={ordersList} pagination={false} bordered />
                {/* 分页 */}
                <div className="pagination">
                    <Pagina currentPage={pagenum}
                        pageSize={pagesize}
                        total={total}
                        onPageChange={onPageChange}
                        onSizeChange={onSizeChange}></Pagina>
                </div>
            </Card>

        </OrdersWrapper>
    )
})
