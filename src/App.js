
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'

function App () {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const handleToggle = () => {
    if (mode === "light") {
      setMode("dark")
      showAlert("Enable Dark Mode", "success")
    }
    else {
      setMode('light')
      showAlert("Enable light Mode", "success")
    }
  }
  document.body.style.backgroundColor = `${(mode === "light") ? "white" : "blue"}`
  return (
    <>
      <Navbar title="TextUtilz" about="About Us" mode={mode} toggle={handleToggle} showAlert={showAlert} />
      <Alert alert={alert} />
      <div className={`container text-${(mode === "light" ? "dark" : "light")}`}>
        <TextForm heading="Enter your text bellow" mode={mode} />
        {/* <About /> */}
      </div>

    </>
  );
}

export default App;
