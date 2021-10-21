import { Table, Typography } from 'antd'
import { data } from '../data'



const columns = [
    {
        title: 'Name',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <Typography.Text copyable >{text}</Typography.Text>,
    },
    {
        title: 'Rate',
        dataIndex: 'userId',
        key: 'userId',
        sorter: (a, b) => a.id - b.id,
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title'
    },

]

const dataSource = data.map( item => ({...item, key: item.id}))

const _Table = () => {
    return (
        < Table 
            dataSource={dataSource}
            columns={columns}
            pagination={{
                pageSize: "5",
                size: "small"
            }}
        />
    )
}

export default _Table
