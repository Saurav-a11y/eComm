import React from 'react'
import "./auth-page.styles.scss"
import SignInandSignUpComponent from '../SignInandSignUp/SignInandSignUpComponent'
import SignUpComponent from '../SingUpComponent/SignUpComponent'

export const AuthPage = () => {
    return (
        <div className="authPage">
            <SignInandSignUpComponent/>
            <SignUpComponent />
        </div>
    )
}
