import React from 'react'
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import HeaderOption from '../HeaderOption/HeaderOption';
import { BusinessCenter, Chat, Notifications } from '@material-ui/icons';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div class="header__left">
                    <img src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' alt=''/>
                    
                    <div class="header__search">
                        {/* SearchIcon */}
                        <SearchIcon />
                        <input type='text'/>
                    </div>
                
                </div>

                <div class="header__right">
                    <HeaderOption 
                        Icon={HomeIcon}
                        title='Home'
                    />
                    <HeaderOption 
                        Icon={SupervisorAccountIcon}
                        title='My Network'
                    />
                    <HeaderOption 
                        Icon={BusinessCenter}
                        title='Jobs'
                    />
                    <HeaderOption 
                        Icon={Chat}
                        title='Messaging'
                    />
                    <HeaderOption 
                        Icon={Notifications}
                        title='Notifications'
                    />
                    <HeaderOption 
                        avatar='https://en.gravatar.com/userimage/201947661/82c56a4fc5a44b6bb7698007ea176c56.jpg'
                        title='Me'
                    />
                </div>         
            </div>
        </div>
    )
}

export default Header;