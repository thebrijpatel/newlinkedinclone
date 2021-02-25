import React, { useState } from 'react';
import './Login.css';
import { auth } from '../../config/firebase';
import { useDispatch } from 'react-redux';
import {login} from '../../features/userSlice';

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const dispatch = useDispatch();


    const register = () => {
        if (!name) {
            return alert('Please enter name');
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic
                    }))
                })
            }).catch(error => alert(error.message));

    };

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            }))
        })
        .catch(e => alert(e));
    };
    return (
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png" alt="" />
        
            <form>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Full name (required if registering)' />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder='Profile pic URL (optional)' />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member ?
                <span className='login__register' onClick={register} > Register Now</span>
            </p>

        </div>
    )
}

export default Login;
