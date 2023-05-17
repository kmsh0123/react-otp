import React, { useState } from 'react'
import './App.css'
import { authentication } from './firebase.config'
import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


const App = () => {
  const countryCode = "+95"
  const [ph,setPh] = useState(countryCode);

  const OnRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, authentication);
  }

    
     const requestOTP = (e) => {
      e.preventDefault();
      OnRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, ph, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            console.log("OTP Sent");
          }).catch((error) => {
            console.log(error);
            console.log("OTP Not Sent");
          });

  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <form onSubmit={requestOTP} className="shadow-lg p-5">
          <div id="recaptcha-container"></div>
          <h1 className='text-2xl font-bold'>Welcome To my site</h1>
          <div className="text-center py-5">
          {/* <PhoneInput country={"mm"} value={ph} onChange={setPh}/> */}
          <input type="tel" value={ph} onChange={e=>setPh(e.target.value)} />
          </div>
          <button type='submit' className='bg-violet-500 hover:bg-violet-900 duration-300 p-3 w-full rounded-lg text-white'>Request OTP</button>
        </form>
    </div>
  )
}

export default App