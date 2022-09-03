import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
    const [mode,setMode] = useState("light");
    const [alert, setAlert] = useState(null);
    const toggleMode = ()=>{
        if (mode==="light") {
            setMode("dark")
            document.body.style.backgroundColor = "#383838"
            showAlert("Dark mode has been enabled", "success");
        }
        else {
            setMode("light")
            document.body.style.backgroundColor = "white"
            showAlert("Light mode has been enabled", "success");
        }
    }
    const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 2500);
          }
    return (
        <>
        <Router>
        <Navbar name="Text Utilis" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
            <Route exact path="/">
                <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
            </Route>
            <Route exact path="/about">
                <About mode={mode} />
            </Route>
        </Routes>
        </Router>
        </>
    );
}

export default App;