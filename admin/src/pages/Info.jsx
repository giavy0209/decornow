import { Table } from "antd"
import { useCallback, useEffect, useState } from "react"
import axios from "../axios"

export default function App() {
    const [Data, setData] = useState([])
    const getData = useCallback(() => {
        axios.get('/info')
            .then(res => {
                setData([...res.data.data])
            })
    }, [])
    useEffect(() => {
        getData()
    }, [getData])

    var columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'SĐT',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Nội dung',
            dataIndex: 'content',
            key: 'content'
        },
    ];

    return (
        <>
            <Table
                className="components-table-demo-nested"
                columns={columns}
                dataSource={Data}
                scroll={{ x: 1100, y: 600 }}
                pagination={false}
            />
        </>
    )
}