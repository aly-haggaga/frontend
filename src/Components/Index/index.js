import React from 'react';
import About from './../About' ;
import Home from './../Home' ;
import Products from './../Products' ;
import Recipes from './../Recipes' ;
import Footer from './../Footer';

const Index=()=>{
    return(
        <div>
        <Home />
        <Recipes />
        <Products />
        <About />
        <Footer />

        </div>
    )
}
export default Index ;