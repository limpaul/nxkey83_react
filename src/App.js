import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPageComponent from './components/MainPageComponent';
import Nav from './components/Nav';
import LoginComponent from './components/LoginComponent';
import LoginBaiscComponent from './components/LoginBasicComponent'
function App() {

  return (
    <BrowserRouter>
       <div className= "App">
        <Nav/>
        <Routes>
            <Route path="/" element={<MainPageComponent/>} />
            <Route path="/noLogin" element={<LoginBaiscComponent/>} />
            <Route path="/login" element={<LoginComponent/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
