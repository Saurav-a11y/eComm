import React from 'react'
import {ReactComponent as Logo} from '../../crown.svg'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.util'
export const HeaderComponent = ({currentUser}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop"> Shop </Link>
                <Link className="option" to="/shop"> Contact </Link>
                <Link className="option" to="/shop"> log </Link>

                {
                    currentUser ? 
                    (<div className="option" onClick={() => auth.signOut()}>
                        SignOut
                    </div>)
                    : <Link className="option" to="/auth">SignIn</Link>
                }
            </div>
        </div>
    )
}
