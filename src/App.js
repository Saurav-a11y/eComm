import React from 'react';
import './App.css';
import  HomePage  from './Pages/HomePage/HomePage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ShopComponent from './Components/ShopComponent/ShopComponent';
import { HeaderComponent } from './Components/HeaderComponent/HeaderComponent';
import SignInandSignUpComponent from './Components/SignInandSignUp/SignInandSignUpComponent';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { AuthPage } from './Components/AuthComponent/AuthPage';



class App extends React.Component  {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth)
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
            console.log(this.state)
          })
          
        }
      this.setState({
        currentUser: userAuth
      })
     
    })
  }
  componentWillUnmount () {
    this.unsubscribeFromAuth();
    console.log("unMounting")
  }
  render() {
    return (
      <Router>
        <HeaderComponent currentUser={this.state.currentUser}/>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path='/shop' component={ShopComponent} />
          <Route path="/auth" component={AuthPage} /> 
        </Switch>
    
      </div>
      </Router>
    );
  }

}


export default App;
