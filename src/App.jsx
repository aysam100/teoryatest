import React, { useState } from "react";
import "./App.css";
import Home from './Home'
import { Messages } from "./messages"

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [password, setPassword] = useState('')
  const handleLogin = () => {
    if (password === '123')
      setIsLogged(true)
  }
  return (isLogged ? 
    <div className="App Loginpage">
        <div class="login-box">
          <h2>{Messages.loginHeader}</h2>
          <form>
            <div class="user-box">
              <input type="password" name="" required="" onChange={(e) => setPassword(e.target.value)}/>
              <label>{Messages.loginCode}</label>
            </div>
            <a onClick={() => handleLogin()}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {Messages.submit}
            </a>
          </form>
        </div> 
    </div> :
    <div className="App">
      <Home />
    </div>
  )
}

export default App;
