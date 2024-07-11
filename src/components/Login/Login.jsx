import React from 'react'
import "./Login.css"
export default function Login() {
  return (
    <>
   
    <div className="page">
      <div className='cover text-center'>
        <img src='https://www.clipartkey.com/mpngs/m/41-412856_b-avatar-for-login-form.png' alt='avatar'></img>
          <h1>Login Form</h1>
          <input type='email' placeholder='Enter mail'></input><br></br>
          <input type="password" placeholder='Enter Password'/>
          <br/>
          <button className='btn btn-primary'>Login</button>
          <p>OR Login using..</p>
          <div className='social-icons'>
          <a href='https://www.facebook.com/login.php/' className='text-black text-decoration-none'><i class="ri-facebook-line"></i></a>
        <a href='https://x.com/i/flow/login?redirect_after_login=%2Fsearch' className='text-black text-decoration-none'>  <i class="ri-instagram-line"></i></a>
          </div>
      </div>
    </div>
    </>
  )
}
