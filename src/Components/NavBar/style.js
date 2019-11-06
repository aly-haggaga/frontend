import styled from 'styled-components' ;
export const Navbar=styled.div`
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
    
    
`
export const NavLogo=styled.div`
width: 50%;
float: left;
`
export const LogoText=styled.h2`
font-size: 30px;
font-weight: bold ;
color:cadetblue
`
export const Ullist=styled.ul`
width: 50%;
float: right;
list-style: none;
padding:0;

`
export const ListItem=styled.li`
display: inline-block;

`
export const Alink=styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 10px;
    font-weight: bold;
    &:hover{
        color:darkslateblue;
    }
`





