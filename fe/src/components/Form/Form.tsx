import { FormEvent, FunctionComponent, useRef } from "react";

interface Form {
    onSubmit?(data: any): any
    onReset?(): any,
    [k: string]: any,
}
const Form: FunctionComponent<Form> = ({ onSubmit, onReset, children }) => {
    const form = useRef<any>()
    const handleForm = (e : FormEvent) => {
        e.preventDefault()
        const formData = new FormData(form.current)
        const data : {[k:string]:any} = {}    
        
        for (const field of formData) {
            data[field[0]] = field[1]
        }
        
        onSubmit && onSubmit(data)
    }
    return (
        <>
            <form onSubmit={handleForm} ref={form} >
                {children}
            </form>
        </>
    )
}

export default Form