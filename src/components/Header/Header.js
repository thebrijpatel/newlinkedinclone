import React from 'react'
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div class="header__left">
                    <img src='' alt=''/>
                    
                    <div class="header__search">
                        {/* SearchIcon */}
                        <SearchIcon />
                        <input type='text'/>
                    </div>
                
                </div>

                <div class="header__right">
                    
                </div>         
            </div>
        </div>
    )
}

export default Header;