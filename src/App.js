import React, { useEffect } from "react";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));


      }else{
        //logout
        dispatch(logout);
      }
    });

    return unsubscribe;

  },[])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
