import { useState } from "react"
import styles from '@/styles/Home.module.css'

export default function Register(){

    const [ registerUsername, setRegisterUsername ] = useState('');
    const [ registerPassword, setRegisterPassword ] = useState('');

    return (
        <>
            <h1>Registrarse</h1>
            <input type="text" className="username" placeholder="Username" onChange={e => setRegisterUsername(e.target.value)}></input>
            <input type="text" className="password" placeholder="Password" onChange={e => setRegisterPassword(e.target.value)}></input>
            <button>Register</button>
        </>
    )
}