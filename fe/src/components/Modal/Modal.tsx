import { FunctionComponent } from "react";

interface Modal {
    show: boolean
    onClose?(): any
    [k: string]: any,
}

const Modal: FunctionComponent<Modal> = ({ show , onClose = () => {},children }) => {
    return (
        <>
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="mask" onClick={onClose}></div>
            <div className="body">
                {children}
            </div>
        </div>
        </>
    )
}

export default Modal