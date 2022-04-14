import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { Table, Button, Modal, Form, InputNumber, Select, Input, Upload, notification, Switch, message } from 'antd'
import axios from '../axios';
const { Item, useForm } = Form
export default function App() {
    const [Data, setData] = useState([])

    const [form] = useForm()
    const [Visible, setVisible] = useState(false)
    const [EditID, setEditID] = useState('')
    const getData = useCallback(() => {
        axios.get('/categories')
            .then(res => {
                setData([...res.data.data])
            })
    }, [])
    const handleEdit = data => {
        form.setFieldsValue(data)
        setEditID(data._id)
        setVisible(true)
        getData()
    }
    const handleDelete = async _id => {
        const r = window.confirm('Xóa?')
        if(!r) return
        await axios.delete(`/categories?_id=${_id}`)
        message.success('Đã xóa')
    }
    var columns = [
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
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Mô tả',
            dataIndex: 'meta',
            key: 'meta'
        },
    ];

    

    useEffect(() => {
        getData()
    }, [getData])

    const handleSubmitForm = useCallback(async (submitData) => {
        const res = await axios.post('/categories', submitData)
        message.success('Đã tạo danh mục mới')
        getData()
    }, [])

    const handleEditForm = useCallback(async data => {
        console.log(data);
        const res = await axios.put(`/categories?_id=${EditID}`, data)
        message.success('Đã Sửa')
        getData()
    }, [EditID])
    return (
        <>
            <div className="container">
                <Form
                    onFinish={handleSubmitForm}
                >
                    <Item label="Tiêu đề" name="title">
                        <Input />
                    </Item>

                    <Item label="Mô tả ngắn" name="meta">
                        <Input />
                    </Item>

                    <Item label="Ảnh bìa" name="thumbnail">
                        <Input />
                    </Item>

                    <Item label="Loại danh mục" name="type">
                        <Select>
                            <Select.Option value="1" >Dự án</Select.Option>
                            <Select.Option value="2">Tin tức</Select.Option>

                        </Select>
                    </Item>
                    <Item>
                        <Button type="primary" htmlType="submit">Thêm danh mục</Button>
                    </Item>
                </Form>

                <Table
                    className="components-table-demo-nested"
                    columns={columns}
                    dataSource={Data}
                    scroll={{ x: 1100, y: 600 }}
                    pagination={false}
                />
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
                        <Item label="Tiêu đề" name="title">
                            <Input />
                        </Item>

                        <Item label="Mô tả ngắn" name="meta">
                            <Input />
                        </Item>

                        <Item label="Ảnh bìa" name="thumbnail">
                            <Input />
                        </Item>

                        <Item label="Loại danh mục" name="type">
                            <Select>
                                <Select.Option value="1" >Dự án</Select.Option>
                                <Select.Option value="2">Tin tức</Select.Option>

                            </Select>
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit">Thêm danh mục</Button>
                        </Item>
                    </Form>
                </Modal>
            </div>

        </>
    )
}