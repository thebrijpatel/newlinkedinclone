import React from 'react';
import './Feed.css';

import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image'; 
import InputOption from '../InputOption/InputOption';
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';

const Feed = () => {
    return (
        <div className='feed'>
            <div class="feed__inputContainer">
                <div class="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div class="feed__inputOptions">
                    <InputOption 
                        Icon={ImageIcon}
                        title='Photo'
                        color='#70B5F9'
                    />
                    <InputOption 
                        Icon={Subscriptions}
                        title='Video'
                        color='#E7A33E'
                    />
                    <InputOption 
                        Icon={EventNote}
                        title='Event'
                        color='#C0CBCD'
                    />
                    <InputOption 
                        Icon={CalendarViewDay}
                        title='Article'
                        color='#7FC15E'
                    />
                </div>
            </div>
        </div>
    )
}

export default Feed;