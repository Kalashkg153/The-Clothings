import React from 'react'

import FormInput from '../form-input/from-input';
import CustomButton    from '../custom-button/custom-button';
import './sign-in.scss';

import  signInWithGoogle  from '../../firebase/firebase.utils';

class Signin extends React.Component{

    constructor(props){

        super(props);

        this.state ={
            email : '',
            password  :''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email : '' , password : ''});
    }

    handleChange = event => {
        const {value , name} = event.target;

        this.setState({ [name] : value});
    }

    render(){
        return (

            <div className='sign-in'>
                <h2>I Already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    handleChange={this.handleChange} 
                    name="email" 
                    type='email' 
                    value={this.state.email} required 
                    label="Email"
                    />

                    <FormInput 
                    name="password" 
                    type='password' 
                    value={this.state.password} 
                    required handleChange={this.handleChange} 
                     label='Password'   
                    />
                   
                    <div className='buttons'>
                        <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                        <CustomButton  onClick={signInWithGoogle} isGoogleSignIn >
                        {' '}
                        Sign In With Google{' '}
                        </CustomButton>
                    </div>
                    
                </form>
            </div>

        )
    }
}

export default Signin;