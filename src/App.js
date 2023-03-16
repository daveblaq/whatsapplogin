import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = (otplessUser) => {
      // Retrieve the user's details after successful login
      const waName = otplessUser.waName;
      const waNumber = otplessUser.waNumber;

      // Handle the signup/signin process
      // ...
    };
  }, []);
  return (
    <div className="App">
      <h3>Whatsapp OTP Login</h3>
    
      <div id="otpless"></div>
    </div>
  );
}

export default App;
