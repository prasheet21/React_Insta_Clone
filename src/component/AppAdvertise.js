import React from 'react' ;
import './Styles/AppAdvertise.css' ;

const AppAdvertise = () => {
    return (
        <div style={{margin : "23px" , display : "flex" , flexDirection : "column" , alignItems : "center"}}>
            <span>Get the app.</span>
            <div className='getApp'>
                <img src='https://miro.medium.com/max/8982/1*V9-OPWpauGEi-JMp05RC_A.png'/>
                <img className='sec-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png'/>
            </div>
        </div>
    ) ;
}

export default AppAdvertise ;