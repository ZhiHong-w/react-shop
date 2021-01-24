import IsPay from '../pages/orders/cpns/isPay';
import OrdersOperation from '../pages/orders/cpns/operation';

export const columns = [
    {
        title: '',
        dataIndex: 'index'
    },
    {
        title: '订单编号',
        dataIndex: 'order_number'
    },
    {
        title: '订单价格（元）',
        dataIndex: 'order_price'
    },
    {
        title: '是否付款',
        dataIndex: 'pay',
        render: (text,record) => <IsPay record={record} />
    },
    {
        title: '是否发货',
        dataIndex: 'is_send'
    },
    {
        title: '下单时间',
        dataIndex: 'create_time'
    },
    {
        title: '操作',
        dataIndex: 'operation',
        width: 150,
        render: (text,record) => <OrdersOperation record={record} />
    }
]