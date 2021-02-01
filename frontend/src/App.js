import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/LandingPage'
import NewEvent from './components/NewEvent'
import NewAccom from './components/NewAccom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import 'react-vertical-timeline-component/style.min.css';
import 'rc-time-picker/assets/index.css';


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


    render(){
      return (
        <div className="App">
          <Router> 
            {/* <LandingPage handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn} /> */}
            <Route exact path ="/" component= {()=><LandingPage handleLogin={this.handleLogin}/>}/>
            <Route exact path ="/event" component = {NewEvent} />
            <Route exact path ="/accommodation" component = {NewAccom} />
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
