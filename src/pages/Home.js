import React, { useState } from 'react';
import HomeImage from '../component/Home/HomeImage';
import LoginForm from '../component/Home/LoginForm';
import HomeFooter from '../component/Home/HomeFooter';


const App = () => {
    return (
        <div style={{backgroundColor: "whitesmoke", minHeight: "100vh"}}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" , padding : "40px" }}>
                <HomeImage />
                <LoginForm/>
            </div>
            <HomeFooter />
        </div>
    );
}

export default App;