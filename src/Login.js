import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <Link to = "/">
            <img className="Login__IMAGE" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlYzExQDYgc7iygaVwmCvdy1YKKjUBvI2cGKZmDFzVxXoOSD2jrtZMBEsVM0C3snD9n4&usqp=CAU" alt="amazon" />  
            </Link>
        </div>
    )
}

export default Login