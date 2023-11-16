import React, { useRef } from 'react';
import bcrypt from 'bcryptjs';

const Signin = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const SignUpForm = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    // Check if the email is valid
    if (!isValidEmail(email)) {
      console.log("Invalid email format. Please enter a valid email.");
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log(hashedPassword);
    window.localStorage.setItem('login', JSON.stringify({ email, hashedPassword }));
  };

  const LoginForm = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    // Check if the email is valid
    if (!isValidEmail(email)) {
      console.log("Invalid email format. Please enter a valid email.");
      return;
    }

    const storedData = JSON.parse(window.localStorage.getItem('login'));
    if (!storedData) {
      console.log("User not found. Please sign up first.");
      return;
    }

    const getHashedPassword = storedData.hashedPassword;

    bcrypt.compare(password, getHashedPassword, function (err, isMatch) {
      if (err) {
        throw err;
      } else if (!isMatch) {
        console.log("Password doesn't match!");
      } else {
        console.log("Password matches!");
      }
    });
  };

  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="email"
          ref={emailInputRef}
          style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}
        />
        <input
          type="password"
          placeholder="password"
          ref={passwordInputRef}
          style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}
        />
        <button type="submit" onClick={(e) => SignUpForm(e)} style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}>Signup</button>
        <button type="submit" onClick={(e) => LoginForm(e)} style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}>Login</button>
      </form>
    </div>
  );
};

export default Signin;
