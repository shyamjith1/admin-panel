import React from 'react';
import './App.css';
import { Chart, LinearScale, CategoryScale, BarElement } from 'chart.js';



import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard'
import Vendors from './pages/Vendors';
import Products from './pages/Products'; 
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import Mss from './pages/Mss';
import Login from './pages/Login';



Chart.register(
  LinearScale,CategoryScale,BarElement
)

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Mss" element={<Mss />} />
        <Route path="/Products" element={<Products />} /> 
        <Route path="/Vendors" element={<Vendors />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
