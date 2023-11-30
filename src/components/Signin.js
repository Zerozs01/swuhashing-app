

import React, { useRef, useState } from "react";
import bcrypt from "bcryptjs";
import Axios from "axios";

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
      alert("กรุณาใส่ข้อมูลให้ครบก่อน ");
      console.log("Invalid email format. Please enter a valid email.");
      return;
    }
    const hashedEmail = bcrypt.hashSync(email, 10);
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log(username);
    console.log(hashedEmail);
    console.log(hashedPassword);
    window.localStorage.setItem(
      "login",
      JSON.stringify({ email: username, hashedEmail, hashedPassword })
    );
    alert("Account create success ");
    console.log("account create success");
    Axios.post("https://swu-hashing1.web.app/Login", {
      username: username,
      email: hashedEmail,
      password: hashedPassword,
    }).then(() => {
      setusersystem([
        ...usersystem,
        {
          username: username,
          email: hashedEmail,
          password: hashedPassword,
        },
      ]);
    });
  };

  const deleteuseraccount = (username, email, password) => {
    Axios.delete('https://swu-hashing1.web.app/Login', {
      data: {
        username: username,
        email: email,
        password: password
      }
    })
      .then(() => {
        // Update the state by filtering out the user with the specified username
        setusersystem((prevUsers) => prevUsers.filter((val) => val.username !== username));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const LoginForm = (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!isValidEmail(email)) {
      alert("กรุณาsinginให้เรียบร้อยก่อนทำการlogin ");
      console.log("Invalid email format. Please enter a valid email.");
      return;
    }

    const storedData = JSON.parse(window.localStorage.getItem("login"));
    if (!storedData) {
      alert("ไม่พบข้อมูลผู้ใช้ กรุณาsignin อีกครั้ง ");
      console.log("User not found. Please sign up first.");
      return;
    }
    const username = usernameInputRef.current.value;
    const username1 = usernameInputRef.current.value;

    if (username === username1) {
      console.log("Username match!");
    } else {
      console.log("Username doesn't match!");
    }

    const getHashedEmail = storedData.hashedEmail;
    const getHashedPassword = storedData.hashedPassword;

    bcrypt.compare(email, getHashedEmail, function (error, isMatch) {
      if (error) {
        throw error;
      } else if (!isMatch) {
        alert("Email ไม่ถูกต้อง ");
        console.log("Email doesn't match!");
      } else {
        alert("Email ถูกต้อง! ");
        console.log("Email matches!");
      }
    });

    bcrypt.compare(password, getHashedPassword, function (err, isMatch) {
      if (err) {
        throw err;
      } else if (!isMatch) {
        alert("Password ไม่ถูกต้อง ");
        console.log("Password doesn't match!");
      } else {
        alert("Password ถูกต้อง! ");
        console.log("Password matches!");
      }
    });
  };

  const getusersystem = () => {
    Axios.get("http://localhost:3001/usersystem").then((response) => {
      setusersystem(response.data);
    });
  };

  

  return (
    <div>
      <section className="py-5 form-box">
        <div className="container px-5">
          <div className="bg-light rounded-4 py-5 px-4 px-md-5 text-center">
            <div className="mb-3">
              <div className="text-gradient fw-bold">
                <i className="bi bi-person"></i>Username
              </div>
              <br />
              <input
                type="username"
                placeholder="username"
                ref={usernameInputRef}
                style={{
                  padding: "15px",
                  borderRadius: "10px",
                  margin: "10px",
                }}
                className="form-control y-5"
              />
            </div>
            <div className="mb-3">
              <div className="text-gradient fw-bold">
                {" "}
                <i className="bi bi-envelope"></i>Email<br></br>(const hashedEmail = bcrypt.hashSync(email, 10);)
              </div>
              <br />
              <input
                type="email"
                placeholder="email"
                ref={emailInputRef}
                style={{
                  padding: "15px",
                  borderRadius: "10px",
                  margin: "10px",
                }}
                className="form-control y-5"
              />
            </div>
            <div className="mb-3">
              <div className="text-gradient fw-bold">
                <i className=" bi bi-key">Password<br></br>(const hashedPassword = bcrypt.hashSync(password, 10);)</i>
              </div>
              <br />
              <input
                type="password"
                placeholder="password"
                ref={passwordInputRef}
                style={{
                  padding: "15px",
                  borderRadius: "10px",
                  margin: "10px",
                }}
                className="form-control y-5"
              />
            </div>

            <button
              className="text-light bg-dark"
              type="submit"
              onClick={(e) => SignUpForm(e)}
              style={{ padding: "25px", borderRadius: "10px", margin: "20px" }}
            >
              Signup
            </button>
            <button
              className="text-light btn-login"
              type="submit"
              onClick={(e) => LoginForm(e)}
              style={{ padding: "25px", borderRadius: "10px", margin: "20px" }}
            >
              Login
            </button>
            <div>
              <button
                onClick={getusersystem}
                className="text-light bg-dark"
                style={{
                  padding: "25px",
                  borderRadius: "10px",
                  margin: "20px",
                }}
              >
                Show user information
              </button>
              {usersystem.map((val, key) => {
                return (
                  <div className="card form-control y-5" key={key}>
                    <div className="text-center card-body">
                      <p className="card-text fw-bold">
                        Username:
                        <span className="text-gradient">{val.username}</span>{" "}
                      </p>
                      <p className="card-text ">
                        Email:<span className="text-gradient">{val.email}</span>{" "}
                      </p>
                      <p className="card-text">
                        password:
                        <span className="text-gradient">{val.password}</span>{" "}
                      </p>
                    </div>
                    <button
  className="fw-bold bg-gradient-primary-to-secondary text-light"
  onClick={() => deleteuseraccount(val.username, val.email, val.password)}
>
  <i className="bi bi-trash3-fill"></i>Delete user account
</button>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
