import React from 'react';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/LandingPage'
import NewEvent from './components/NewEvent'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'


class App extends React.Component { 
    state = {
      isLoggedIn: false,
      user: []
    }

    componentDidMount(){
      if(localStorage.getItem('auth_key')){
        this.setState({isLoggedIn: true})
      }
    }
    handleLogin=(data)=>{
      if(localStorage.getItem('auth_key')){
        this.setState({isLoggedIn: true, user: data.user})
      }
    }

    // createCart=()=>{
    //   const newCart={
    //       total:0.0
    //   }

    //   fetch(cartUrl,{
    //       method: 'POST',
    //       headers:{
    //           'Content-Type': 'application/json',
    //           'Auth-Key': localStorage.getItem('auth_key')
    //       },
    //       body: JSON.stringify(newCart)
    //       })
    //       .then(res=>res.json())
    //       .then(cart=> {
    //       localStorage.setItem('cart_id', cart.id)
    //   })
    // } 

    render(){
      return (
        <div className="App">
          <Router> 
            {/* <NavBar handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn} /> */}
            <Route exact path ="/" component= {LandingPage} />
            <Route exact path ="/event" component = {NewEvent} />
            <Route exact path ="/signup" component= {()=><SignUp handleLogin={this.handleLogin}/>}/>
            <Route exact path ="/login" component= {()=>{
              return <Login handleLogin={this.handleLogin}/>
            }}/>

            <Route exact path ="/dashboard" component= {()=>{
              if(localStorage.getItem('auth_key')){
                return <Dashboard currentUser={this.state.user} />
              }else{
                return <Redirect to="/login"/>
              }}} />   

            <Route exact path ="/logout" component = {()=>{
              localStorage.clear()
              this.setState({isLoggedIn: false})
              return <Redirect to="/"/>
            }}/>
          </Router>
        </div>
      );
    }
}


export default App;