/**
 * 用户列表数据
 */
import SwitchState from '../pages/users/cpns/switch';
import Operation from '../pages/users/cpns/operation';

export const columns = [
    {
        title: '',
        dataIndex: 'index'
    },
    {
        title: '姓名',
        dataIndex: 'username'
    },
    {
        title: '邮箱',
        dataIndex: 'email'
    },
    {
        title: '电话',
        dataIndex: 'mobile'
    },
    {
        title: '角色',
        dataIndex: 'role_name'
    },
    {
        title: '状态',
        dataIndex: 'state',
        render: (text,record) => <SwitchState record={record}/> 
    },
    {
        title: '操作',
        dataIndex: 'operation',
        width: 230,
        render: (text,record) => <Operation record={record} />
    }
]