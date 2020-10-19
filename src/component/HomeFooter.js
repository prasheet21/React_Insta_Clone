import React from 'react';
import './Styles/HomeFooter.css';

const HomeFooter = () => {
    return (
        <div className='footer'>
            <div className='quick-links'>
                <a src='#'>ABOUT</a>
                <a src='#'>HELP</a>
                <a src='#'>PRESS</a>
                <a src='#'>API</a>
                <a src='#'>JOBS</a>
                <a src='#'>PRIVACY</a>
                <a src='#'>TERMS</a>
                <a src='#'>LOCATIONS</a>
                <a src='#'>TOP ACCOUNTS</a>
                <a src='#'>HASHTAGS</a>
                <a src='#'>LANGUAGE</a>
            </div>
            <div className='cpy-rgt'>
                &copy;2020 INSTAGRAM FROM FACEBOOK
            </div>

        </div>
    );
}

export default HomeFooter;