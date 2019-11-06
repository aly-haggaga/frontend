import React from 'react';
import Footer from './../Footer';

import './style.css'
const Contact =()=>{
    return(
        <React.Fragment> 
            <div class="contact">
            <div class="container">
                <h2 class="contact-title">Contact Us Here</h2>
                <form action="">
                    <div class="form-input">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Your Email"/>
                    </div>
                    <textarea  placeholder="Your Message"></textarea><br/>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div> 
            <Footer/>
        </React.Fragment>
    )
}
export default Contact ;