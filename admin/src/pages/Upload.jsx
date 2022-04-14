import React, { useState, useCallback, useEffect } from 'react'

import { Button, Modal, Upload, message } from 'antd'
import { API_DOMAIN, DOMAIN, ITEM_PER_PAGE } from '../constant'
import calAPI from '../axios'
import { UploadOutlined } from '@ant-design/icons';

export default function App() {
    const token = localStorage.getItem('token')
    console.log(token);
    const [ListImages, setListImages] = useState([])

    const getListImage = useCallback(async () => {
        var res = await calAPI.get(`/upload`)
        setListImages([...res.data.data])
    }, [])

    useEffect(() => {
        getListImage()
    },[getListImage])

    const props = {
        name: 'file',
        action: `${API_DOMAIN}/upload`,
        multiple: true,
        onChange(info) {
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
                getListImage()
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    const handleCopy = useCallback(e => {
        var input = document.createElement('input');
        document.querySelector('body').append(input);
        input.value = e.target.innerText;
        input.select();
        document.execCommand("copy");
        input.remove();
        message.success(`copied ${e.target.innerText} `);
    }, [])

    return (
        <>
            <Upload headers={{authorization : token}} {...props}>
                <Button>
                    <UploadOutlined /> Tải ảnh mới
                </Button>
            </Upload>
            <div className="row column-4">
                {
                    ListImages.map(image => {
                        return (
                            <div className="item" key={image.path}>
                                <div style={{ border: '1px solid #000' }}>
                                    <div style={{ backgroundColor: '#ccc' }} className="list-img img img-1-1">
                                        <img
                                            className={`cur-p`}
                                            alt=""
                                            src={`${DOMAIN}${image.path}`} />
                                    </div>
                                    <p onClick={handleCopy} style={{ cursor: 'pointer', fontSize: 20, wordBreak : 'break-all' }}>{`${DOMAIN}${image.path}`}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}