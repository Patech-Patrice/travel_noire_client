import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from "./components/Login.js";
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser.js";
import Logout from "./components/Logout.js";
//import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js'


class App extends React.Component {

  componentDidMount(){
   this.props.getCurrentUser()
  }
  render(){
    return (
      //this.props.currentUser ? <Logout/> : <Login/>
      <div className="App">
      <NavBar/>
      <MainContainer />
      </div>
      
    );
  }
  
}

//const mapStateToProps = ({ currentUser }) => {
  //return {
    //currentUser 
    ///trips: state.myTrips
  //}
//}


export default connect(null, { getCurrentUser })(App);
//export default connect(mapStateToProps, { getCurrentUser })(App);
