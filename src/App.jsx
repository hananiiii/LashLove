import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
function App() {
 

  return (
    <>
       <BrowserRouter>
        <div className="App">
          <div className="pages">
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
             
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
