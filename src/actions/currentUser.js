//import { resetLoginForm } from "./loginForm.js"
//import { resetSignupForm } from "./signupForm.js"
//import { getMyTrips, clearTrips } from "./myTrips.js"

// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

//export const clearCurrentUser = () => {
  //return {
    //type: "CLEAR_CURRENT_USER"
  //}
//}

// asynchronous action creators
export const login = credentials => {

  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
     
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: 'Suzy Q', password: "password" })
    })
}
}


