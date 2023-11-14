import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
   <>
    <main className="flex-shrink-0">
      <nav className="navbar mr-auto navbar-light bg-white py-3">
            <div className="container px-5 navbar-expand-lg">
            <Link to ="/"className="nav-link"><span className="fw-bolder text-logo">HASHING PORTAL</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        
                       
                        <li className="nav-item"><Link to ="/"className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to ="/Generate"className="nav-link">Generate</Link></li>
                        <li className="nav-item"><Link to ="/Investigate" className="nav-link">Investigate</Link></li>
                        <li className="nav-item"><Link to ="/Login" className="nav-link">Login</Link></li>
                        
                      
                    </ul>
                </div>
            </div>
     </nav>
 
     <header className="py-5">
         <div className="container-fluid px-5 pb-5">
             <div className="row gx-5 ">
                 <div className="col-xxl">
                    
                     <div className="text-xxl text-xxl-center ">
                         <div className="badge bg-gradient-primary-to-secondary mb-4">
                             <div className="text-uppercase">GENERATE &middot; INVESTIGATE &middot; security</div>
                         </div>
                         <div className="fs-3 fw-light text-muted">Select your option you want to use</div>
                         <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Generate or Investigate<i className="bi bi-file-earmark-lock"></i></span></h1>
                         <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl mb-3 text-white">
                             <Link to ="/Generate"className="btn btn-logo btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">GENERATE</Link>
                             <Link to ="/Investigate" className="btn btn-outline-light  btn-lg px-5 py-3 fs-6 fw-bolder">INVESTIGATE</Link>
                            
                         </div>
                     </div>
                 </div>
             </div>
           </div>
      </header>
  </main>
  </>
 )
}

export default Header