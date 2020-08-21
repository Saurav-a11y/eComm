import React  from 'react'
import './custom-button.styles.scss'

export const CustomButton = ({children, isGoogleSignIn, ...buttonProps}) => {
    return (
        <button className= {`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...buttonProps}>
            {children}
        </button>
    )
}
