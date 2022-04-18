import { faEdit, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Layout, Modal } from "components";
import readFile from "helpers/readFile";
import { ChangeEvent, CSSProperties, FunctionComponent, useEffect, useState } from "react";

interface Data {
    img: any,
    border: string,
    ratioX: number,
    ratioY: number,
    x: number,
    y: number,
}

const baseData = {
    img: null,
    border: 'full-black',
    ratioX: 1,
    ratioY: 1,
    x: 0, y: 0,
}

const Upload: FunctionComponent = () => {
    const [Data, setData] = useState<Data[]>([{ ...baseData }])

    const [ModalData, setModalData] = useState<any>(null)

    const handleChangeImage = async (event: ChangeEvent<HTMLInputElement>, index) => {
        event.persist()
        console.log(index);
        const file = event?.target?.files?.[0]
        if (!file) return
        const url = await readFile(file)

        setData(_data => {
            _data[index].img = url
            if (_data[_data.length - 1].img) _data.push({ ...baseData })
            return [..._data]
        })
    }

    const handleDelete = (e, index) => {
        e.preventDefault()
        Data.splice(index, 1)
        setData([...Data])
    }

    const handleEdit = (e, o, index) => {
        e.preventDefault()
        setModalData({
            ...o,
            index
        })
    }

    useEffect(() => {
        if (ModalData) {
            Data[ModalData.index] = { ...ModalData }
            setData([...Data])
        }
    }, [ModalData, Data])

    const handleChangeEdit = (value) => {
        setModalData({
            ...ModalData,
            ...value
        })

    }

    return (
        <>
            <Layout>
                <div className="upload">
                    <Modal show={ModalData} onClose={() => setModalData(null)}>
                        <div className="edit-modal">
                            <div className="row-input">
                                <div className="label">Vị trí ngang</div>
                                <input onChange={(e) => handleChangeEdit({ x: e.target.value })} type="number" value={ModalData?.x} />
                            </div>
                            <div className="row-input">
                                <div className="label">Vị trí dọc</div>
                                <input onChange={(e) => handleChangeEdit({ y: e.target.value })} type="number" value={ModalData?.y} />
                            </div>
                            <div className="row-input">
                                <div className="label">Viền</div>
                                <select onChange={(e) => handleChangeEdit({ border: e.target.value })} value={ModalData?.border}>
                                    <option value="full-black">Viền đen</option>
                                    <option value="full-white">Viền trắng</option>
                                </select>
                            </div>
                            <div className="row-input">
                                <div className="label">Tỉ lệ ngang</div>
                                <input onChange={(e) => handleChangeEdit({ ratioX: e.target.value })} value={ModalData?.ratioX} type="number" />
                            </div>
                            <div className="row-input">
                                <div className="label">Tỉ lệ dọc</div>
                                <input onChange={(e) => handleChangeEdit({ ratioY: e.target.value })} value={ModalData?.ratioY} type="number" />
                            </div>
                        </div>
                    </Modal>
                    <div className="list-image">
                        {
                            Data.map((o, index) => <label
                                htmlFor={'imagepick' + index}
                                key={`img${index}`}
                                style={{ aspectRatio: `${o.ratioX / o.ratioY}`, '--x': `${o.x}px`, '--y': `${o.y}px` } as CSSProperties}
                                className={`image ${o.border} ${o.img ? 'picked' : ''}`}>
                                {
                                    !o.img && <>
                                        <div className="plus"></div>
                                    </>
                                }
                                {
                                    o.img && <>
                                        <div onClick={(e) => handleDelete(e, index)} className="delete">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </div>
                                        <div onClick={e => handleEdit(e, o, index)} className="edit">
                                            <FontAwesomeIcon icon={faEdit} />
                                        </div>
                                        <div className="img">
                                            <img src={o.img} alt="" />
                                        </div>
                                    </>
                                }
                                <input onChange={(e) => handleChangeImage(e, index)} type="file" name="" id={'imagepick' + index} />
                            </label>)
                        }

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Upload