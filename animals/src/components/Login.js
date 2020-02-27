import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth.js';


export default function Login(props) {
    // How can we log in? What do we need to do?

    //line 10
    const [login, setLogin] = useState({
    //line 11    
        username: '',
        password: ''
    });

    const handleChange = event => {
        setLogin({
            ...login,
            [event.targt.name]: event.target.value
        })
    };

    //line 13 - add handleSubmit
    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth().post().then(response => {
            console.log('response', response)
            localStorage.setItem('token', response.data.payload)
            props.history.push('/dashboard'); 
            // dashboard now has be made a protected route
            // props.history.push re-directs you to another page
        }).catch(error => {
            console.log(`login error: ${error}`)
        })
    };

    

    return (
        <div>
        {/* line 12  */}
            <form className="" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="username" 
                name="username" 
                value={login.username} 
                onChange={handleChange} 
                className="input"
                />
                <input 
                type="password" 
                placeholder="password" 
                name="password" 
                value={login.password} 
                onChange={handleChange} 
                className="input"
                />
                <button className='start'>Login</button>
            </form>
        </div>
    )
}