import { Table, Button, Modal, Form, InputNumber, Select, Input, Upload, notification, Switch, message } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import axios from '../axios'
const { Item, useForm } = Form
const Staff = () => {
    const [form] = useForm()
    const [Data, setData] = useState([])
    const [Visible, setVisible] = useState(false)
    const [EditID, setEditID] = useState('')
    const getData = useCallback(() => {
        axios.get('/admin')
            .then(res => {
                setData([...res.data.data])
            })
    }, [])
    const handleEdit = data => {
        form.setFieldsValue(data)
        setEditID(data._id)
        setVisible(true)
    }
    const handleDelete = async _id => {
        const r = window.confirm('Xóa?')
        if (!r) return
        await axios.delete(`/admin?_id=${_id}`)
        message.success('Đã xóa')
        getData()
    }
    const columns = [
        {
            title: 'Hành động',
            dataIndex: '_id',
            key: '_id',
            render: (_id, data) => <>
                <Button onClick={() => handleEdit(data)}>Sửa</Button>
                <Button onClick={() => handleDelete(_id)}>Xóa</Button>
            </>
        },
        {
            title: 'username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: data => <span>{new Date(data).toLocaleString()}</span>
        },
    ];

    useEffect(() => {
        getData()
        console.log(123);
    }, [getData])

    const handleSubmitForm = useCallback(async (submitData) => {
        try {
            const res = await axios.post('/admin', submitData)
            message.success('Đã tạo staff')
            getData()
        } catch (error) {
            message.error(error.response.data.msg)
        }
    }, [])
    const handleEditForm = useCallback(async data => {
        const res = await axios.put(`/admin?_id=${EditID}`, data)
        message.success('Đã Sửa')
        getData()
    }, [EditID])
    return (
        <>
            <div className="container">
                <Form
                    onFinish={handleSubmitForm}
                >
                    <Item label="username" name="username">
                        <Input />
                    </Item>
                    <Item label="password" name="password">
                        <Input type={"password"} />
                    </Item>
                    <Item label="Tên" name="name">
                        <Input />
                    </Item>
                    <Item label="Quyền" name={"role"} >
                        <Select mode='multiple'>
                            <Select.Option value={0}>Toàn quyền</Select.Option>
                            <Select.Option value={1}>Đăng blog</Select.Option>
                            <Select.Option value={2}>Xem user</Select.Option>
                            <Select.Option value={3}>Xem Đơn hàng</Select.Option>
                            <Select.Option value={4}>Tạo discount</Select.Option>
                        </Select>
                    </Item>
                    <Item>
                        <Button type="primary" htmlType="submit">Thêm staff</Button>
                    </Item>
                </Form>

                <Table
                    className="components-table-demo-nested"
                    columns={columns}
                    dataSource={Data}
                    scroll={{ x: 1100, y: 600 }}
                    pagination={false}
                />
            </div>

            <Modal
                title="Sửa Components"
                visible={Visible}
                footer={false}
                onCancel={() => { setVisible(false) }}
                forceRender
            >
                <Form
                    form={form}
                    onFinish={handleEditForm}
                >
                    <Item label="username" name="username">
                        <Input />
                    </Item>
                    <Item label="Tên" name="name">
                        <Input />
                    </Item>
                    <Item label="Quyền" name={"role"} >
                        <Select mode='multiple'>
                            <Select.Option value={0}>Toàn quyền</Select.Option>
                            <Select.Option value={1}>Đăng blog</Select.Option>
                            <Select.Option value={2}>Xem user</Select.Option>
                            <Select.Option value={3}>Xem Đơn hàng</Select.Option>
                        </Select>
                    </Item>

                    <Item>
                        <Button type="primary" htmlType="submit">Sửa</Button>
                    </Item>
                </Form>
            </Modal>

        </>

    )
}
export default Staff