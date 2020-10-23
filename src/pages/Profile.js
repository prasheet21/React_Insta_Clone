import React from 'react';
import Avatar from 'react-avatar';
import { NavLink, Switch } from 'react-router-dom';
import DashboardHeader from '../component/Dashboard/DashboardHeader';
import './Styles/Profile.css';

const Profile = () => {
    return (
        <>
            <DashboardHeader />
            <div className='profile content'>
                <div style={{ borderBottom: "1px solid rgba(0 , 0 , 0 , 0.1)" }}>
                    <div className='profile-meta'>
                        <Avatar src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg' round={true} size='200' name='Prasheet Pathak' />
                        <div style={{ display:"flex" , flexDirection : "column" }}>
                            <div className='user-details'>
                                <p>Prasheet Pathak(Username)</p>
                                <button>Edit Profile</button>
                            </div>
                            <div className='popularity'>
                                <p>0 posts</p>
                                <p>0 followers</p>
                                <p>0 followings</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='inner-nav'>
                        <NavLink to='/profile/posts'>Posts</NavLink>
                        <NavLink to='/profile/saved'>Saved</NavLink>
                        <NavLink to='/profile/tagged'>Tagged</NavLink>
                </div>
            </div>
        </>
    );
}

export default Profile;