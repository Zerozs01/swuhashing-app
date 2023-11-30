import React from 'react'
import Header from'../components/Header'
import Footer from'../components/Footer'

import Generatepj2 from '../components/Generatepj2'
import Hashing from '../components/hashing' // hashing component
function Generate() {
  return (<>
   <Header />
  <Hashing />
   
    <Generatepj2></Generatepj2>
    <Footer></Footer>
           
    </>
  
 
    
  )
}

export default Generate