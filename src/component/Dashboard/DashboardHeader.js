import React from 'react' ;
import { NavLink, useHistory } from 'react-router-dom' ;
import '../Styles/DashboardHeader.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Avatar from 'react-avatar';

const DashboardHeader = () => {

    const history = useHistory() ;
    return(
        <div className='dashboard-header'>
            <div className='inner-header'>
                <p onClick={(e)=>{
                    history.push('/dashboard') ;
                }} className='brand-logo'>Instagram</p>
                <div className='search'>
                    <input placeholder='Search People/Company' type='text'/>
                    <FontAwesomeIcon className='search-btn' icon={faSearch} />
                </div>
                <div className='nav-links'>
                    <NavLink exact to="/dashboard">Home</NavLink>
                    <NavLink exact to="/dashboard">Message</NavLink>
                    <NavLink exact to="/profile"><Avatar name="Prasheet Pathak" size='30' round={true} /></NavLink>     
                </div>
            </div>
        </div>
    ) ;
}

export default DashboardHeader ;