import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "./register.scss"
const Register = () => {
  return (
    <div className='register'>
      <Navbar type="auth" />
      <div className="container">
        <div className="wrapper">
          <h2 className="title">
            註冊帳戶
          </h2>
          <div className="form">
            <input type="text" id="username" placeholder='新帳號' />
            <input type="password" id="password" placeholder='新密碼' />
            <input type="password" id="checkpassword" placeholder='確認密碼' />
            <button className="submit" >註冊</button>
            <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
              <span>已有帳號？按這裡登入</span>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Register