import React, { Component } from 'react'
import { FormInputComponent } from '../FormInputComponent/FormInputComponent'
import './signIn.styles.scss'
import { CustomButton } from '../CustomButtomComponent/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.util';
 class SignInandSignUpComponent extends Component {
        constructor() {
            super();
            this.state = {
                email: '',
                password: ''
            }
        }
        handleSubmit = (e) => {
            e.preventDefault()
            this.setState({email: '', password: ''})
        }

        handleChange = (e) => {
            const {value, name} = e.target
            this.setState({[name]: value})
        }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an Account</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInputComponent 
                    name="email"
                    type="email"
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label="email"
                    required
                    />
                    <FormInputComponent 
                    name="password"
                    type="password"
                    handleChange={this.handleChange}
                    value={this.state.password}
                    label="password"
                    required
                    />
                    <div className="buttons">
                    <CustomButton type="submit"> SignIn </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In WIth Google </CustomButton>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}
export default SignInandSignUpComponent