import React from 'react'
import { connect } from 'react-redux'
//import { NavLink } from 'react-router-dom'
import Logout from './Logout.js'
import Login from './Login.js'

//
const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
        { currentUser ? <strong>Welcome, ${currentUser.name}</strong>: ""}
        {currentUser ? <Logout /> : <Login /> }
    </div>
  )
}


const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
    //loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)