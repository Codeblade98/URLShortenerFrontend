import './App.css';
import Navbar from './components/Navbar'
import Login from './components/Login';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"

function App() {
  const [isSignedUp,setSignedUp] = useState(false)
  return (
    <div className="App">
      <Navbar title="SwiftURL" isSignedUp={isSignedUp} sex="male" element1="Services" element2="Documentation" element3="Pricing" dropdown1="Dashboard" dropdown2="Settings" dropdown3="History"/>
      <Routes>
        {/* <Route path="/" element={ <Home/> } /> */}
        <Route path="/login" element={ <Login/> } />
        {/* <Route path="/signup" element={ <Signup/> } /> */}
        {/* <Route exact path="/profile" element={ <Profile/> } /> */}
        {/* <Route path="profile/dashboard" element={ <Dashboard/> } /> */}
        {/* <Route path="profile/settings" element={ <Settings/> } /> */}
        {/* <Route path="profile/history" element={ <History/> } /> */}
        {/* <Route path="/services" element={ <Services/> } /> */}
        {/* <Route path="/documentation" element={ <Documentation/> } /> */}
        {/* <Route path="/pricing" element={ <Pricing/> } /> */}
        {/* <Route path="*" element={ <Error/> } /> */}
      </Routes> 
    </div>
  );
}

export default App;
