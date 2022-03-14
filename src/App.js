import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
   const [mode, setMode] = useState('light');
   const [switchText, setSwitchText] = useState('Enable dark mode');
   const [alert, setAlert] = useState(null);
   const showAlert = (msg,type)=>{
     setAlert({
       msg: msg,
       type: type
     })
     setTimeout(() => {
       setAlert(null);
     }, 1500);
   }
   const toggleMode = () => {
      if(mode === 'light') {
        setMode('dark');
        setSwitchText('Enable light mode');
        showAlert('You are enabling the dark mode','success');
        document.body.style.backgroundColor='#041525';
        document.title="TextUtils - Dark Mode";
      }
      else {
        setMode('light');
        setSwitchText('Enable dark mode');
        showAlert('You are enabling the light mode','success');
        document.body.style.backgroundColor='white';
        document.title="TextUtils - Light Mode";
      }
   }
   const handleColorChange = (event)=>{
     document.body.style.backgroundColor=event.target.value;
   }
  return (
    <>
    {/* <Router> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar mode={mode} switchText={switchText} toggleMode={toggleMode} handleColorChange={handleColorChange} />
      <Alert alert={alert}/>
      
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}> */}
          {/* </Route> */}
          {/* <Route exact path="/"  */}
          {/* element={ */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
            {/* } */}
          {/* /> */}
        {/* </Routes> */}
        </div>
    {/* </Router> */}
    </>
  );
}

export default App;
