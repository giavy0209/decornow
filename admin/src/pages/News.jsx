import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { Table, Button, Modal, Form, InputNumber, Select, Input, Upload, notification, Switch, message } from 'antd'
import axios from '../axios';
const { Item, useForm } = Form
export default function App() {
    const [Data, setData] = useState([])
    const [Categories, setCategories] = useState([])
    const [form] = useForm()
    const [Visible, setVisible] = useState(false)
    const [EditID, setEditID] = useState('')
    const getData = useCallback(() => {
        axios.get('/news')
            .then(res => {
                setData([...res.data.data])
            })

        axios.get('/categories')
            .then(res => {
                setCategories([...res.data.data])
            })
    }, [])

    const handleEdit = async data => {
        form.setFieldsValue(data)
        setEditID(data._id)
        setVisible(true)
        getData()
    }
    const handleDelete = async _id => {
        const r = window.confirm('Xóa?')
        if(!r) return
        await axios.delete(`/news?_id=${_id}`)
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
        const res = await axios.post('/news', submitData)
        message.success('Đã tạo danh mục mới')
        getData()
    }, [])

    const handleEditForm = useCallback(async data => {
        const res = await axios.put(`/news?_id=${EditID}`, data)
        message.success('Đã Sửa')
        getData()
    },[EditID])


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
                    <Item label="Loại tin tức" name="type">
                        <Select>
                            <Select.Option value="1" >tin dự án</Select.Option>
                            <Select.Option value="2">Tin tức</Select.Option>

                        </Select>
                    </Item>
                    <Item label="Danh mục" name="categories">
                        <Select>
                            {
                                Categories.map(o => <Select.Option key={o._id} value={o._id} >{o.title}</Select.Option>)
                            }

                        </Select>
                    </Item>
                    <Item
                        getValueFromEvent={(data1, data2) => {
                            return data1.editor.getData()
                        }}
                        valuePropName='data' label="Nội dung" name="content">

                    </Item>

                    <Item>
                        <Button type="primary" htmlType="submit">Thêm tin tức</Button>
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
                        <Item label="Loại tin tức" name="type">
                            <Select>
                                <Select.Option value="1" >tin dự án</Select.Option>
                                <Select.Option value="2">Tin tức</Select.Option>

                            </Select>
                        </Item>
                        <Item label="Danh mục" name="categories">
                            <Select>
                                {
                                    Categories.map(o => <Select.Option key={o._id} value={o._id} >{o.title}</Select.Option>)
                                }

                            </Select>
                        </Item>
                        <Item
                            getValueFromEvent={(data1, data2) => {
                                return data1.editor.getData()
                            }}
                            valuePropName='data' label="Nội dung" name="content">
                        </Item>

                        <Item>
                            <Button type="primary" htmlType="submit">Sửa tin tức</Button>
                        </Item>
                    </Form>
                </Modal>
            </div>

        </>
    )
}