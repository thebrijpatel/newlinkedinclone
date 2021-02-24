import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {

    const recentItem = (topic) => {
        return <div class="sidebar__recentItem">
            <span class="sidebar__hash">
                #
            </span>
            <p>{topic}</p>
        </div>
    }

    return (
        <div className='sidebar'>
            <div class="sidebar__top">
                <img src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fD88MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80' alt='' />
                <Avatar className='sidebar__avatar' />
                <h2>Brijesh Patel</h2>
                <h4>sadariyabrijesh@gmail.com</h4>
            </div>
            <div class="sidebar__stats">
                <div class="sidebar__stat">
                    <p>Who viewed you</p>
                    <p class="sidebar__statNumber">9999</p>
                </div>
                <div class="sidebar__stat">
                    <p>Views on posts</p>
                    <p class="sidebar__statNumber">11111</p>
                </div>
            </div>
            <div class="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('nodejs')}
                {recentItem('web')}
                {recentItem('games')}
                {recentItem('css')}
            </div>
            
        </div>
    )
}

export default Sidebar
