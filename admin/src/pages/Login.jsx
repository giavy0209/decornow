import { message } from "antd"
import { useState } from "react"
import axios from "../axios"

export default function App() {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const login = async () => {
        try {
            const res = await axios.post('/auth-admin', { username: Username, password: Password })
            if (res.data.status === 1) {
                localStorage.setItem('token', res.data.token)
                window.location.reload()
            } else {
            }
        } catch (error) {
            message.error('Sai')
        }
    }
    return (
        <>
            <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50% , -50%)' }} className="login">
                <input onChange={e => setUsername(e.target.value)} value={Username} style={{ width: '100%', padding: 10, margin: 10 }} type="text" placeholder="username" />
                <input onChange={e => setPassword(e.target.value)} value={Password} style={{ width: '100%', padding: 10, margin: 10 }} type="password" placeholder="password" />
                <button onClick={login} style={{ border: 'none', cursor: 'pointer', padding: 10 }}>Đăng nhập</button>
            </div>
        </>
    )
}