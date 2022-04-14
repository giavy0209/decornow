import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { Table, Button, Modal, Form, InputNumber, Select, Input, Upload, notification, Switch, message } from 'antd'
import { CKEditor } from 'ckeditor4-react';
import axios from '../axios';
CKEditor.editorUrl = '/ckeditor/ckeditor.js';
const { Item, useForm } = Form
export default function App() {
    const [Data, setData] = useState([])
    const [form] = useForm()
    const [Visible, setVisible] = useState(false)
    const [EditID, setEditID] = useState('')
    const getData = useCallback(() => {
        axios.get('/banners')
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
        if(!r) return
        await axios.delete(`/banners?_id=${_id}`)
        message.success('Đã xóa')
        getData()
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
            title: 'Chữ',
            dataIndex: 'text',
            key: 'text',
        },
        {
            title: 'Link tới',
            dataIndex: 'link',
            key: 'link'
        },
    ];

    useEffect(() => {
        getData()
    }, [getData])

    const handleSubmitForm = useCallback(async (submitData) => {
        const res = await axios.post('/banners', submitData)
        message.success('Đã tạo danh mục mới')
        getData()
    }, [])
    const handleEditForm = useCallback(async data => {
        const res = await axios.put(`/banners?_id=${EditID}`, data)
        message.success('Đã Sửa')
        getData()
    },[EditID])

    return (
        <>
            <div className="container">
                <Form
                    onFinish={handleSubmitForm}
                >
                    <Item label="Chữ" name="text">
                        <Input />
                    </Item>

                    <Item label="Hình" name="img">
                        <Input />
                    </Item>

                    <Item label="Link tới" name="link">
                        <Input />
                    </Item>

                    <Item>
                        <Button type="primary" htmlType="submit">Thêm banner</Button>
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
                        <Item label="Chữ" name="text">
                            <Input />
                        </Item>

                        <Item label="Hình" name="img">
                            <Input />
                        </Item>

                        <Item label="Link tới" name="link">
                            <Input />
                        </Item>

                        <Item>
                            <Button type="primary" htmlType="submit">Thêm banner</Button>
                        </Item>
                    </Form>
                </Modal>
            </div>

        </>
    )
}