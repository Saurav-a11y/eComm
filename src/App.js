import React from 'react';
import './App.css';
import  HomePage  from './Pages/HomePage/HomePage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ShopComponent from './Components/ShopComponent/ShopComponent';
import { HeaderComponent } from './Components/HeaderComponent/HeaderComponent';
import SignInandSignUpComponent from './Components/SignInandSignUp/SignInandSignUpComponent';
import { auth } from './firebase/firebase.util';



class App extends React.Component  {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }
  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Router>
        <HeaderComponent currentUser={this.state.currentUser}/>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path='/shop' component={ShopComponent} />
          <Route path="/auth" component={SignInandSignUpComponent} /> 
        </Switch>
    
      </div>
      </Router>
    );
  }

}


export default App;
