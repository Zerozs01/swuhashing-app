import React from 'react'

function Investigate1() {
  return (
    <>
    <div className="container px-5 my-5">
    <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Investigate</span></h1>
    </div>
    <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
            <nav className="navbar mr-auto navbar-light bg-white mb-1">
                <div className="container px-1 navbar-expand-lg">
                    <a className="navbar-brand" href="index.html"><span className="fw-bolder text-dark">SHA-TYPE</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent2">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li><a className="dropdown-item fw-bold text-logo" href="https://codebeautify.org/md5-hash-generator" target="blank">|MD5|</a></li>
                            <li><a className="dropdown-item   fw-bold text-gradient" href="https://codebeautify.org/sha1-hash-generator" target="blank">SHA-1</a></li>
                            <li><a className="dropdown-item fw-bold text-logo" href="https://codebeautify.org/sha256-hash-generator" target="blank">|SHA-256|</a></li>
                            <li><a className="dropdown-item  fw-bold text-gradient" href="https://codebeautify.org/sha512-hash-generator" target="blank">SHA-512</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            
           {/* Experience Section*/}
            <section>
                <div className="d-flex align-items-center justify-content-between mb-1">
                    <h2 className="text-light fw-bolder mb-0">Importfile</h2>

                </div>


               {/* Experience Card 1*/}
                <div className="card shadow border-0 rounded-4 mb-5">
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                            <div className="col text-center text-lg mb-4 mb-lg-0">
                                <div className="bg-light p-4 rounded-4">
                                    <div className="text-gradient fw-bolder mb-2">Drag file to here</div>
                                   {/* Email address input*/}
                                    <div className="htmlForm-floating mb-3">
                                    <label htmlFor="email">Type Input</label><br></br>
                                        <input className="htmlForm-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                       
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An Input is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                   {/* Submit Button*/}
                                    <div className="d-grid"><button className=" btn-login btn-lg disabled text-light" id="submitButton" type="submit">submit</button></div>
                                    


                                    <div className="d-none" id="submitErrorMessage">
                                        <div className="text-center text-danger mb-3">Error sending message!</div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>



                </div>

            </section>
           {/* Education Section*/}
            <section>
                <h2 className="text-secondary fw-bolder mb-4">Importfile </h2>
               {/* Education Card 1*/}
                <div className="card shadow border-0 rounded-4 mb-5">
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                            <div className="col text-center text-lg mb-4 mb-lg-0">
                                <div className="bg-light p-4 rounded-4">
                                    <div className="text-gradient fw-bolder mb-2">Drag file to here</div>
                                   {/* Email address input*/}
                                    <div className="htmlForm-floating mb-3">
                                    <label htmlFor="email">Type Input</label><br></br>
                                        <input className="htmlForm-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                     
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An Input is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                   {/* Submit Button*/}
                                    <div className="d-grid"><button className=" btn-login btn-lg disabled text-light" id="submitButton" type="submit">submit</button></div>
                                    


                                    <div className="d-none" id="submitErrorMessage">
                                        <div className="text-center text-danger mb-3">Error sending message!</div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
               {/* Download resume button*/}
               {/* Note: Set the link href target to a PDF file within your project*/}
                <div>
                    <a className="btn btn-success px-2 py-3" href="#!">
                        <div className="bi bi-ui-checks d-inline-block "></div>
                        Check file
                    </a>

                    <a className="btn btn-primary px-3 py-3" href="#!">
                        <div className="d-inline-block bi bi bi-arrow-repeat me-2"></div>
                        Repeat again
                    </a>

                </div>


            </section>
           {/* Divider*/}
            <div className="pb-5"></div>
           {/* Skills Section*/}
            <section>
               {/* Skillset Card*/}
                <div className="card shadow border-0 rounded-4 mb-5">
                    <div className="card-body p-5">

                       {/* Languages list*/}
                        <div className="mb-0">
                            <div className="d-flex align-items-center mb-4">
                                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                                <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                            </div>
                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                <div className="col mb-4 mb-md-0">
                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div>
                                </div>
                                <div className="col mb-4 mb-md-0">
                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div>
                                </div>
                                <div className="col">
                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div>
                                </div>
                            </div>
                            <div className="row row-cols-1 row-cols-md-3">
                                <div className="col mb-4 mb-md-0">
                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Php</div>
                                </div>

                            </div>
                            
                           {/* Professional skills list*/}
                            <div className="mb-0">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">TEAM </span></h3>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100 text-gradient ">(J)ผู้ทดสอบระบบ66109010180</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100 text-gradient">(Win)Graphic Design66109010201</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100 text-gradient">(Au)Coding66109010322</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100 text-gradient">(Tarit)Stuckture design66109010449</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100 text-gradient"> (Pond)Research-inhtmlFormation66109010455</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    </div>
</div> </>
  )
}

export default Investigate1