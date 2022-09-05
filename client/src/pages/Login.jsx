import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import "./login.scss"
const Login = () => {
    return (
        <>
     <div className='login'>
        <Navbar type={"auth"}/>
            <div className="container">
                <div className="wrapper">
                    <h2 className="title">
                    登入或建立帳戶
                    </h2>
                    <div className="form">
                      <input type="text" id="username" placeholder='帳號' />
                        <input type="password" id="password" placeholder='密碼' />
                        <button className="submit" >登入</button>
                        <span>忘記密碼？</span>
                        <Link to="/register" style={{textDecoration:"none",color: "inherit"}}>
                        <span>註冊＆創建一個帳號</span>
                        </Link>
                       
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default Login