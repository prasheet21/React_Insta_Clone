import React, { useState } from 'react';
import HomeImage from '../component/HomeImage';
import LoginForm from '../component/LoginForm';
import HomeFooter from '../component/HomeFooter';


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