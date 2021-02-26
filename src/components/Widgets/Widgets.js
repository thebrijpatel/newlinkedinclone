import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import { FiberManualRecord } from '@material-ui/icons';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('Luficfer', 'Top news - 9999 readers')}
            {newsArticle('Holland', 'Cool stuff')}
            {newsArticle('Corona', 'New traces')}
            {newsArticle('Tang', 'Top drink')}
        </div>
        
    )
}

export default Widgets
