import React from 'react';
import './style.css';
import {HomeSec} from './style2.js'

const Home=()=>{
    return(
        
            <HomeSec>
            <div className="container">
                <div className="homeinfo">
                    <h2 className="hometit">Suchi Bar</h2>
                    <h4 className="homeinfo2">The Wonders Of The Ocean</h4>
                    <p className="homedesc">
                    Including fish as a regular part of a balanced diet has been shown
                    to greatly help the symptoms of rheumatoid arthritis.
                    </p>
                    <button className="homebutton">Let's Begin</button>
                </div>
            </div>
            </HomeSec>
      
    )
}


export default Home ;