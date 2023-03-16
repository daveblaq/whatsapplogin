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
      // 
    };
  }, []);
  return (
    <div className="App ">
      <div className="container mx-auto md:w-full w-11/12 flex items-center justify-center ">
        <div className="bg-white shadow-lg flex items-center flex-col justify-center w-[40%] rounded-xl py-[50px] absolute top-[20%]">
          <h3 className="pb-8">Whatsapp OTP Login</h3>

          <div id="otpless"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
