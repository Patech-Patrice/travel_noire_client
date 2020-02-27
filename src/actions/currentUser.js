import { resetLoginForm } from "./loginForm.js"
//import { resetSignupForm } from "./signupForm.js"
//import { getMyTrips, clearTrips } from "./myTrips.js"

// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

//clears out user in client
export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// asynchronous action creators
export const login = credentials => {
    console.log("credentials are", credentials)
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
     //credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "http://localhost:3000"
      },
      body: JSON.stringify(credentials)
    })
    .then(r => r.json())
    .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
          //dispatch(getMyTrips())
          dispatch(resetLoginForm())
          //history.push('/')
        }
      })

    .catch(console.log)
}
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    //dispatch(clearTrips())
    return fetch('http://localhost:3000/api/v1/logout', {
      //credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          //dispatch(getMyTrips())
        }
      })
      .catch(console.log)
  }
}
