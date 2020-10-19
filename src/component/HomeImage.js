import React, { useEffect, useState } from 'react' ;
// import homeImg from '../Images/home-phones.jpg'
import ss1 from '../Images/ss-1.jpg' ;
import './Styles/HomeImage.css'

const HomeImage = () => {
    let [count , setCount] = useState(0) ;
    useEffect((e) => {
        setInterval(() => {
            setCount(prevVal => prevVal + 1) ;
        } , 2000) ;
    } , [])
    const allSs = ['https://piunikaweb.com/wp-content/uploads/2019/03/textmessage-human-person-text.jpeg' , 'https://en.instagram-brand.com/wp-content/uploads/2016/11/Feed_iOS.png?w=750&h=1334' , 'https://i1.wp.com/www.trendmut.com/wp-content/uploads/2018/02/instagram-notifies-about-screenshots.jpg'] ;
    return (
        <div className='main-container'>
            <div className='home-img'>
                <img className='external-phone-home' src="https://spidergram.herokuapp.com/assets/dummy-phone-2x-cfda84ea67ee6c59614f1b1b2e4eb073c57460b234cbe06784a27d4df3ce7b98.png" />
                <img className='internal-phone-home' src={allSs[count%(allSs.length)]}/>
        
            </div>
        </div>
    ) ;
}

export default HomeImage ;