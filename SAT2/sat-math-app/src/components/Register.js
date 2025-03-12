import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../firebase';

function Register() {
  const history = useHistory();

  const handleRegister = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      await db.collection('users').doc(userCredential.user.uid).set({
        email,
        firstName,
        lastName
      });
      history.push('/login');
    } catch (error) {
      console.error('Error registering:', error);
      alert('Failed to register. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <img src="logo.png" alt="Logo" className="logo" />
        <h2>Welcome to</h2>
        <h1>SAT Math Practice</h1>
        <p>Enter your information below to continue</p>
      </div>
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="example@gmail.com" />
        </div>
        <div className="input-group-row">
          <div className="input-group">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" name="firstName" placeholder="First Name" />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
          </div>
        </div>
        <div className="input-group-row">
          <div className="input-group">
            <label htmlFor="password">Create Password</label>
            <input type="password" id="password" name="password" placeholder="********" />
            <i className="fas fa-eye"></i>
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="********" />
            <i className="fas fa-eye"></i>
          </div>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Register;
