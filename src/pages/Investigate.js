import React from 'react'
import Header from'../components/Header'
import Footer from'../components/Footer'
import Investigate1 from '../components/Investigate1'
import Hashing from '../components/investigatehash' // hashing component

function Investigate() {
  return (<>  <Header />
  <Hashing />
  <Investigate1 />
   <Footer></Footer>
   </>
   
  )
}

export default Investigate