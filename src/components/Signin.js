import React, { useRef, useState } from 'react';
import bcrypt from 'bcryptjs';
import Axios from 'axios';

const Signin = () => {
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  const [usersystem, setusersystem] = useState([]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const SignUpForm = (e) => {
    e.preventDefault();
    const username = usernameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!isValidEmail(email)) {
      console.log("Invalid email format. Please enter a valid email.");
      return;
    }
    const hashedEmail = bcrypt.hashSync(email, 10);
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log(username);
    console.log(hashedEmail);
    console.log(hashedPassword);
    window.localStorage.setItem('login', JSON.stringify({ email: username,hashedEmail, hashedPassword }));
    console.log("account create success");
    Axios.post('http://localhost:3001/usersystem', {
      username: username,
      email: hashedEmail,
      password: hashedPassword
    }).then(() => {
      setusersystem([...usersystem, {
        username:username,
        email: hashedEmail,
        password: hashedPassword
      }])
    });
  };

  const LoginForm = (e) => {
    e.preventDefault();
   const usernamee = usernameInputRef.current.value;
  
   const usertype = username;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!isValidEmail(email)) {
      console.log("Invalid email format. Please enter a valid email.");
      return;
    }

    const storedData = JSON.parse(window.localStorage.getItem('login'));
    if (!storedData) {
      console.log("User not found. Please sign up first.");
      return;
    }
       
    const getHashedEmail = storedData.hashedEmail;
    const getHashedPassword = storedData.hashedPassword;
    
   
    if ( usernamee === usertype)  {
      console.log("Username match!");
    } else {
      
     
    console.log("Username doesn't match!");
    }

    bcrypt.compare(email, getHashedEmail, function (error, isMatch) {
      if (error) {
        throw error;
      } else if (!isMatch) {
        console.log("Email doesn't match!");
      } else {
        console.log("Email matches!");
      }
   
    });

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

  const getusersystem = () => {
    Axios.get('http://localhost:3001/usersystem').then((response) => { setusersystem(response.data); });
  }

  return (
    <div>
      <section className="py-5">
        <div className="container px-5">
          <div className="bg-light rounded-4 py-5 px-4 px-md-5 text-center">
          <div className="mb-3">
              <div className="text-gradient fw-bold">Username</div><br />
              <input
                type="username"
                placeholder="username"
                ref={usernameInputRef}
                style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}
              />
            </div>
            <div className="mb-3">
              <div className="text-gradient fw-bold">Email</div><br />
              <input
                type="email"
                placeholder="email"
                ref={emailInputRef}
                style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}
              />
            </div>
            <div className="mb-3">
              <div className="text-gradient fw-bold">Password</div><br />
              <input
                type="password"
                placeholder="password"
                ref={passwordInputRef}
                style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}
              />
            </div>

            <button
              className="text-light bg-dark"
              type="submit"
              onClick={(e) => SignUpForm(e)}
              style={{ padding: '25px', borderRadius: '10px', margin: '20px' }}
            >
              Signup
            </button>
            <button
              className="text-light btn-login"
              type="submit"
              onClick={(e) => LoginForm(e)}
              style={{ padding: '25px', borderRadius: '10px', margin: '20px' }}
            >
              Login
            </button>
            <div>
              <button onClick={getusersystem} className="text-light bg-dark" style={{ padding: '25px', borderRadius: '10px', margin: '20px' }}>
                Show user information
              </button>
              {usersystem.map((val, key) => {
                return (
                  <div className="card" key={key}>
                    <div className="text-center card-body">
                      <p className="card-text">Username: {val.username}</p>
                      <p className="card-text">Email: {val.email}</p>
                      <p className="card-text">password: {val.password}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
