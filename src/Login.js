import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <Link to = "/">
            <img className="Login__IMAGE" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="amazon" />  
            </Link>

            <div className='login--container'>
                <h1 >Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='Text' />
                    <h5>Password </h5>
                    <input  type='password'/>
                    <button className='sign-in-button'>Sign in</button>
                </form>
                <p>
                    By Continuig, you agree to Amazon's Conditon of use and Privacy Notice, Our Cookies Notice and our Interest Based Ads Notices
                </p>
                <button className='regsisterbutton'>Create you Amazon Account</button>

            </div>
        </div>
    )
}

export default Login