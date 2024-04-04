import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Vendors from './pages/Vendors';
import Products from './pages/Products'; 
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import Mss from './pages/Mss';
import Login from './pages/Login';

const App = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BrowserRouter>
        <div className="app-container">
        <Sidebar isOpen={isOpen} toggle={toggleSidebar} >
          <div className="page-content" style={{ marginLeft: isOpen ? "250px" : "50px" }}>
          
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Mss" element={<Mss />} />
              <Route path="/Products" element={<Products />} /> 
              <Route path="/Vendors" element={<Vendors />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Logout" element={<Logout />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            
          </div>
          </Sidebar>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;