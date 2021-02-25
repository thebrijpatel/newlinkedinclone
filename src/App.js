import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { auth } from './config/firebase';
import {login, logout} from './features/userSlice';
import Widgets from './components/Widgets/Widgets';
// import { Widgets } from '@material-ui/icons';

require('dotenv').config();


function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      }
      else {
        // user logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />

      {
        !user ? <Login /> : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            {/* Widgets */}
            <Widgets />
          </div>
        )
      }

    </div>
  );
}


export default App;
