import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Informationhomepage from './components/Information homepage';

function App() {
  const navigate = useNavigate();

  // Handle navigating back to the previous page
  const handleGoBack = () => {
    navigate(-1); // Go back one step in the history
  };

  return (
    <>
      <Header />
      <Informationhomepage />
      <About />
      <Footer />
      <button onClick={handleGoBack}>Go Back</button>
    </>
  );
}

export default App;
