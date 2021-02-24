import React , {useState, useEffect} from 'react';
import './Feed.css';

import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image'; 
import InputOption from '../InputOption/InputOption';
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import Post from '../Post/Post';
import {db} from '../../config/firebase';

import firebase from 'firebase';

const Feed = () => {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // db.collection('posts').onSnapshot(snapshot => {
        //     setPosts(
        //         snapshot.docs.map(doc => (
        //             {
        //                 id: doc.id,
        //                 data: doc.data()
        //             }
        //         ))
        //     )
        // })
        db.collection('posts').orderBy('timestamp', 'desc')
            .onSnapshot(
                function(snapshot) {
                    setPosts(
                        snapshot.docs.map(doc => (
                            {
                                id: doc.id,
                                data: doc.data()
                            }
                        ))
                    )
                }
            )
    }, [])

    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add(
            {
                name: 'Brijesh Patel',
                description: 'This is a description 22',
                message: input,
                photoUrl: '',
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        )
        setInput('');
    }

    return (
        <div className='feed'>
            <div class="feed__inputContainer">
                <div class="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
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

            {/* Posts */}

            {/* {posts.map(({id, data: {name, description, message, photoUrl}}) => {
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            })} */}

            {posts.map(
                (
                    {
                        id,
                        data: {
                            name, description, message, photoUrl
                        }
                    }
                ) => (
                    <Post 
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                )
            )}

        </div>
    )
}

export default Feed;