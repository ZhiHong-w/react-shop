import RightsLevel from '../pages/rights/cpns/rightslevel'

export const columns = [
    {
        title: '',
        dataIndex: 'index',
        width: 60
    },
    {
        title: '权限名称',
        dataIndex: 'authName',
    },
    {
        title: '路径',
        dataIndex: 'path',
        width: 280
    },
    {
        title: '权限等级',
        dataIndex: 'rightslevel',
        width: 280,
        render: (text,record) => <RightsLevel record={record}/>
    }
]