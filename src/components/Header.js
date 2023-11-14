import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
   <>
  
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
  
  </>
 )
}

export default Header