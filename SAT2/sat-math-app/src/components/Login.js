import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('loggedInUser', email);
      history.push('/');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to log in. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src="logo.png" alt="Logo" className="logo" />
        <h2>Welcome to</h2>
        <h1>SAT Math Practice</h1>
        <p>Please login to your account.</p>
      </div>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="example@gmail.com" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="********" />
          <i className="fas fa-eye"></i>
        </div>
        <div className="options">
          <label><input type="checkbox" id="rememberMe" name="rememberMe" /> Remember me</label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Log In</button>
      </form>
      <div className="alternative-login">
        <p>Or Continue With</p>
        <div className="social-buttons">
          <button className="google"><i className="fab fa-google"></i> Google</button>
          <button className="facebook"><i className="fab fa-facebook-f"></i> Facebook</button>
        </div>
      </div>
      <div className="register">
        <p>New member here? <a href="/register">Register Now</a></p>
      </div>
    </div>
  );
}

export default Login;
