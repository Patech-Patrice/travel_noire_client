import React from 'react';
import './App.css';
import Login from "./components/Login.js";

class App extends React.Component {

  //componentDidMount(){
    //fetch("http://localhost:3000/api/v1/users/1")
    //.then(res => res.json())
    //.then(console.log)

  //}
  render(){
    return (
    <Login/>
    );
  }
  
}

export default App;
