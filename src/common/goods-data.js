import Operation from '../pages/goods/cpns/operation'
export const columns = [
    {
        title: '',
        dataIndex: 'index'
    },
    {
        title: '商品名称',
        dataIndex: 'goods_name'
    },
    {
        title: '商品价格（元）',
        dataIndex: 'goods_price'
    },
    {
        title: '商品重量(kg)',
        dataIndex: 'goods_weight'
    },
    {
        title: '创建时间',
        dataIndex: 'add_time',
        width: 200
    },
    {
        title: '操作',
        dataIndex: 'operation',
        render: (text,record) => <Operation record={record}/>
    }
]