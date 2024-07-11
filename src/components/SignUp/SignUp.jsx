import React from 'react'
import "./SignUp.css"
 const SignUp = () => {
  return (
    <div className="container">
    <div className="avatar">
        <img src="https://tse4.mm.bing.net/th?id=OIP.GLFqmenTxi6LaSfeIO8f2AHaHa&pid=Api&P=0&h=180" alt="Avatar" />
    </div>
    <div className="signup-form">
        <h2>Sign Up</h2>
        <form action="signup.php" method="post">
            <input type="text" name="username" placeholder="Username" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
        </form>
    </div>
</div>
  )
}

export default SignUp;