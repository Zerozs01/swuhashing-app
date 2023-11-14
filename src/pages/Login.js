import React from 'react'
import Header from'../components/Header'
import Footer from'../components/Footer'
function Login() {
  return (
    <> <Header></Header>
    <section className="py-5">
            <div className="container px-5">
               {/* Contact htmlForm*/}
                <div className="bg-light rounded-4 py-5 px-4 px-md-5 text-center">
                    <div className="text-center mb-5">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                        <h1 className="fw-bolder">Login</h1>
                        <p className="lead fw-normal text-muted mb-0">Enter your inhtmlFormation</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                          
                            <htmlForm id="contacthtmlForm" data-sb-htmlForm-api-token="API_TOKEN">
                               {/* UserName input*/}
                                <div className="htmlForm-floating mb-3">
                                <label htmlFor="name">User account</label><br></br>
                                    <input className="htmlForm-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                   
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                               {/* Email address input*/}
                                <div className="htmlForm-floating mb-3">
                                <label htmlFor="email">Email address</label><br></br>
                                    <input className="htmlForm-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                   
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>

                               {/*Password input*/}
                                <div className="htmlForm-floating mb-3">  <label htmlFor="email">password</label><br></br>
                                    <input className="htmlForm-control" id="password" type="password" placeholder="name@example.com" data-sb-validations="required,email" />
                                  
                                    <div className="invalid-feedback" data-sb-feedback="password:required">An password is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="password:email">Email is not valid.</div>
                                </div>
                               {/* Submit success message*/}
                               {/**/}
                               {/* This is what your users will see when the htmlForm*/}
                               {/* has successfully submitted*/}
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">htmlForm submission successful!</div>
                                        To activate this htmlForm, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-htmlForms">https://startbootstrap.com/solution/contact-htmlForms</a>
                                    </div>
                                </div>
                               {/* Submit error message*/}
                               {/**/}
                               {/* This is what your users will see when there is*/}
                               {/* an error submitting the htmlForm*/}
                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">Error sending message!</div>
                                </div>
                               {/* Submit Button*/}
                                <div className="d-grid"><button className=" btn-login btn-lg disabled text-light" id="submitButton" type="submit">Submit</button></div>
                            </htmlForm>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   <Footer />
    </>
  )
}

export default Login