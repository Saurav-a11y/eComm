import React, { Component } from 'react'
import './sign-up.styles.scss'
import { FormInputComponent } from '../FormInputComponent/FormInputComponent'
import { CustomButton } from '../CustomButtomComponent/CustomButton'
import { auth, createUserProfileDocument } from '../../firebase/firebase.util'

export default class SignUpComponent extends Component {
    constructor() {
        super() 
        this.state = {
            displayName: '',
            email: '',
            password: '',
            conformPassword: ''
        }
    }
    handleChange = (e) => {
        const {value, name} = e.target
        this.setState({[name]: value})
    }
    handleSubmit = async e => {
        e.preventDefault()
        const {displayName, email, password, conformPassword} = this.state
        if(password != conformPassword) {
            alert('passsword doesnt match')
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            )
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: "",
                password: '',
                conformPassword: ''
            })

        }catch(err) {
            console.log(err)
        }
    }
     render() {
         const {displayName, email, password, conformPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title"> I do not have an account</h2>
                <span>SignIn with your email and password</span>
               <form  onSubmit={this.handleSubmit}>
               <FormInputComponent
                type="text"
                name="displayName"
                value={displayName}
                handleChange={this.handleChange}
                label="displayName"
                 />
                 <FormInputComponent
                type="email"
                name="email"
                value={email}
                handleChange={this.handleChange}
                label="email"
                 />
                 <FormInputComponent
                type="password"
                name="password"
                value={password}
                handleChange={this.handleChange}
                label="password"
                 />
                 <FormInputComponent
                type="password"
                name="conformPassword"
                value={conformPassword}
                handleChange={this.handleChange}
                label="conformPassword"
                 />
                 <CustomButton type="submit">SignUp</CustomButton>
               </form>
                 
            </div>
        )
    }
}
