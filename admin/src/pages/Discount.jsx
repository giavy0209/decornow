import { Table, Button, Modal, Form, InputNumber, Select, Input, Upload, notification, Switch, message, DatePicker } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import axios from '../axios'
import moment from 'moment'
const { Item, useForm } = Form
const Discount = () => {
    const [form] = useForm()
    const [Data, setData] = useState([])
    const [Visible, setVisible] = useState(false)
    const [EditID, setEditID] = useState('')
    const getData = useCallback(() => {
        axios.get('/discount')
            .then(res => {
                setData([...res.data.data.map(o => ({...o , expire : moment(o.expire)}))])
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
        await axios.delete(`/discount?_id=${_id}`)
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
            title: 'min',
            dataIndex: 'min',
            key: 'min',
        },
        {
            title: 'max',
            dataIndex: 'max',
            key: 'max'
        },
        {
            title: 'Số lượng',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Còn lại',
            dataIndex: 'left',
            key: 'left',
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Mã',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Giá trị giảm',
            dataIndex: 'value',
            key: 'value',
        },
        {
            title: 'Giá dựa trên',
            dataIndex: 'discountBy',
            key: 'discountBy',
        },
        {
            title: 'Người tạo',
            dataIndex: 'createBy',
            key: 'createBy',
            render : data => <>{data.username}</>
        },
        {
            title: 'Hết hạn',
            dataIndex: 'expire',
            key: 'expire',
            render: data => <span>{new Date(data).toLocaleString()}</span>
        },
        {
            title: 'Ngày tạp',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: data => <span>{new Date(data).toLocaleString()}</span>
        },
    ];

    useEffect(() => {
        getData()
    }, [getData])

    const handleSubmitForm = useCallback(async (submitData) => {
        try {
            const res = await axios.post('/discount', submitData)
            message.success('Đã tạo Discount')
            getData()
        } catch (error) {
            message.error(error.response.data.msg)
        }
    }, [])
    const handleEditForm = useCallback(async data => {
        const res = await axios.put(`/discount?_id=${EditID}`, data)
        message.success('Đã Sửa')
        getData()
    }, [EditID])
    return (
        <>
            <div className="container">
                <Form
                    onFinish={handleSubmitForm}
                >
                    <Item label="Giảm min (VND)" name="min">
                        <Input type={"number"} />
                    </Item>
                    <Item label="giảm max (VND)" name="max">
                        <Input type={"number"} />
                    </Item>
                    <Item label="số lượng" name="total">
                        <Input type={"number"} />
                    </Item>
                    <Item label="Tên" name="name">
                        <Input />
                    </Item>
                    <Item label="Mã" name="code">
                        <Input />
                    </Item>
                    <Item label="Ngày hết hạn" name="expire">
                        <DatePicker format={"YYYY-MM-DD - hh:mm:ss"} showTime />
                    </Item>
                    <Item label="Giảm dựa trên" name="discountBy">
                        <Select>
                            <Select.Option value="percent">Giảm theo %</Select.Option>
                            <Select.Option value="fixed">Giảm theo Số tiền cố định</Select.Option>
                        </Select>
                    </Item>

                    <Item label="Giá trị giảm" name="value">
                        <Input type={"number"} />
                    </Item>
                    <Item>
                        <Button type="primary" htmlType="submit">Thêm Discount</Button>
                    </Item>
                </Form>

                <Table
                    className="components-table-demo-nested"
                    columns={columns}
                    dataSource={Data}
                    scroll={{ x: 2200, y: 600 }}
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
                    <Item label="Giảm min (VND)" name="min">
                        <Input type={"number"} />
                    </Item>
                    <Item label="giảm max (VND)" name="max">
                        <Input type={"number"} />
                    </Item>
                    <Item label="số lượng" name="total">
                        <Input type={"number"} />
                    </Item>
                    <Item label="Tên" name="name">
                        <Input />
                    </Item>
                    <Item label="Mã" name="code">
                        <Input />
                    </Item>
                    <Item label="Ngày hết hạn" name="expire">
                        <DatePicker format={"YYYY-MM-DD - hh:mm:ss"} showTime />
                    </Item>
                    <Item label="Giảm dựa trên" name="discountBy">
                        <Select>
                            <Select.Option value="percent">Giảm theo %</Select.Option>
                            <Select.Option value="fixed">Giảm theo Số tiền cố định</Select.Option>
                        </Select>
                    </Item>

                    <Item label="Giá trị giảm" name="value">
                        <Input type={"number"} />
                    </Item>
                    <Item>
                        <Button type="primary" htmlType="submit">Thêm Discount</Button>
                    </Item>
                </Form>
            </Modal>

        </>

    )
}
export default Discount