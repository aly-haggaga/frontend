import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar,NavLogo,LogoText,Ullist,ListItem,Alink} from './style.js'
const linkStyle ={
    display: 'block',
    color: '#222',
    textDecoration: 'none',
    padding: '10px 15px',
    fontWeight: 'bold'
    
}
const Nav=()=>{
    return(
        <Navbar>
            <div className="container">
                <NavLogo>
                    <LogoText>SUCHI BAR</LogoText>
                </NavLogo>
                <Ullist>
                    <ListItem ><Link style={linkStyle} to="/">Home</Link></ListItem>
                    <ListItem ><Alink href="#">Products</Alink></ListItem>
                    <ListItem ><Alink href="#">Recipes</Alink></ListItem>
                    <ListItem ><Alink href="#">About</Alink></ListItem>
                    <ListItem ><Link style={linkStyle} to="/contact">Contact</Link></ListItem>
                </Ullist> 
            </div>
        </Navbar>
    )
}
export default Nav ;