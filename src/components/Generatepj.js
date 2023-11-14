import React from 'react'

function Generatepj() {
  return (
    <section className="py-5">
            <div className="container px-5 mb-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline bg-light">Generate</span></h1>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                        {/*Project Card 1*/}

                          {/*select sha type*/}
                        <div className="card overflow-hidden shadow rounded-4 border-0 mb-5 align-items-center">
                            <div className="card-body p-0">
                                <div className="d-flex align-items-center">
                                    <div className="p-5">
                                        <h2 className="fw-bolder">
                                            <nav className="navbar navbar-expand-sm navbar-light bg-white ">
                                                <div className="container px-5">
                                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">

                                                            <li className="nav-item dropdown">
                                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                SHA TYPE
                                                            </a>
                                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                                    <li><a className="dropdown-item" href="https://codebeautify.org/md5-hash-generator" target="blank">MD5</a></li>
                                                                    <li><a className="dropdown-item" href="https://codebeautify.org/sha1-hash-generator" target="blank">SHA-1</a></li>
                                                                    <li><a className="dropdown-item" href="https://codebeautify.org/sha256-hash-generator" target="blank">SHA-256</a></li>
                                                                    <li><a className="dropdown-item" href="https://codebeautify.org/sha512-hash-generator" target="blank">SHA-512</a></li>


                                                                </ul>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </nav>
                                        </h2>

                                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                                            {/*Email address input*/}
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                                <label htmlFor="email">Type Input</label>
                                                <div className="invalid-feedback" data-sb-feedback="email:required">An Input is required.</div>
                                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                            </div>
                                            {/*Submit Button*/}
                                            <div className="d-grid"><button className=" btn-login btn-lg disabled text-light" id="submitButton" type="submit">submit</button></div>
                                           
                                              {/*Password input*/}
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="password" type="password" placeholder="name@example.com" data-sb-validations="required,email" />
                                                <label htmlFor="email">Hash Output</label>
                                                <div className="invalid-feedback" data-sb-feedback="password:required">An Hash Output is required.</div>
                                                <div className="invalid-feedback" data-sb-feedback="password:email">Email is not valid.</div>
                                            </div>
                                            {/*Submit success message*/}
                                              {/**/}
                                            {/*This is what your users will see when the form*/}
                                            {/*has successfully submitted*/}
                                            <div className="d-none" id="submitSuccessMessage">
                                                <div className="text-center mb-3">
                                                    <div className="fw-bolder">Form submission successful!</div>
                                                    To activate this form, sign up at
                                                    <br />
                                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                                </div>
                                            </div>
                                            {/*Submit error message*/}
                                              {/**/}
                                            {/*This is what your users will see when there is*/}
                                            {/*an error submitting the form*/}
                                            <div className="d-none" id="submitErrorMessage">
                                                <div className="text-center text-danger mb-3">Error sending message!</div>
                                            </div>
                                            {/*Submit Button*/}
                                            <div className="d-grid"><button className=" btn-login btn-lg disabled text-light" id="submitButton" type="submit">Save hash-text</button></div>
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        
  )
}

export default Generatepj