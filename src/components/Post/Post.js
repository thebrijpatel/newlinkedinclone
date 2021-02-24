import { Avatar } from '@material-ui/core';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React from 'react';
import InputOption from '../InputOption/InputOption';
import './Post.css';

const Post = ({name, description, message, photoUrl}) => {
    return (
        <div className='post'>
            <div class="post__header">
                <Avatar />
                <div class="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div class="post__body">
                <p>{message}</p>
            </div>

            <div class="post__buttons">
                <InputOption
                    Icon={ThumbUpAltOutlined}
                    title='Like'
                    color='gray'
                />
                <InputOption
                    Icon={ChatOutlined}
                    title='Comment'
                    color='gray'
                />
                <InputOption
                    Icon={ShareOutlined}
                    title='Share'
                    color='gray'
                />
                <InputOption
                    Icon={SendOutlined}
                    title='Send'
                    color='gray'
                />
            </div>

        </div>
    )
}

export default Post