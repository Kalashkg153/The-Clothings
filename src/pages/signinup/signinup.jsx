
import React from 'react'

import './signinup.scss';
import Signin from '../../components/sign-in/sign-in'; 
import Signup from '../../components/signup/signup';

const Signinup = () => {
  return (
    <div className='signinup'>

        <Signin />
        <Signup />
    </div>
  )
}

export default Signinup