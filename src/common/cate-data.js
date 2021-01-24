import IsOk from '../pages/categories/cpns/isOk';
import Level from '../pages/categories/cpns/level';
import Operation from '../pages/categories/cpns/operation';

export const columns = [
    {
        title: '#',
        dataIndex: 'index'
    },
    {
        title: '分类名称',
        dataIndex: 'cat_name'
    },
    {
        title: '是否有效',
        dataIndex: 'deleted',
        render: (text,record)=> <IsOk record={record} />
    },
    {
        title: '排序',
        dataIndex: 'level',
        render: (text,record)=> <Level record={record} />
    },
    {
        title: '操作',
        dataIndex: 'operation',
        width: 200,
        render: (text,record)=> <Operation record={record} />
    }
]