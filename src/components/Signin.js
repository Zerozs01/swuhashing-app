import React, { useRef } from 'react';
import bcrypt from 'bcryptjs';

const Signin = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const SignUpForm = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!isValidEmail(email)) {
      console.log("Invalid email format. Please enter a valid email.");
      return;
    }

    const hashedEmail = bcrypt.hashSync(email, 10);
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log(hashedEmail);
    console.log(hashedPassword);
    window.localStorage.setItem('login', JSON.stringify({ email: hashedEmail, hashedPassword }));
    console.log("account create success");
  };

  const LoginForm = (e) => {
    e.preventDefault();
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

    const getHashedEmail = storedData.email; // Assuming you store hashed email directly during signup
    const getHashedPassword = storedData.hashedPassword;

    bcrypt.compare(email, getHashedEmail, function (error, isMatch) {
      if (error) {
        throw error;
      } else if (!isMatch) {
        console.log("Email doesn't match!");
        // You can show an alert or update the UI for incorrect email
      } else {
        console.log("Email matches!");
        // You can show an alert or update the UI for correct email
      }
    });

    bcrypt.compare(password, getHashedPassword, function (err, isMatch) {
      if (err) {
        throw err;
      } else if (!isMatch) {
        console.log("Password doesn't match!");
        // You can show an alert or update the UI for incorrect password
      } else {
        console.log("Password matches!");
        // You can show an alert or update the UI for successful login
      }
    });
  };

  return (
    <div>
      <section className="py-5">
        <div className="container px-5">
          {/* Contact htmlForm*/}
          <div className="bg-light rounded-4 py-5 px-4 px-md-5 text-center">
            <div className=" mb-3">
              <div className="text-gradient fw-bold">Email</div><br></br>
              <input
                type="email"
                placeholder="email"
                ref={emailInputRef}
                style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}
              />
            </div>
            <div className=" mb-3">
              <div className="text-gradient fw-bold">Password</div><br></br>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
