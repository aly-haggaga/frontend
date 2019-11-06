import React,{useState,useEffect} from 'react';
import './style.css'
import axios from 'axios'
const Products=()=>{
    const [images,setImages]=useState([])
    useEffect(()=>{
        axios.get('../../js/data.json').then(res=>{setImages(res.data.products)})
    },[])




    const prooductsImages=images.map((imageitem)=>{
        return(
            <div className="box" key={imageitem.id}>
            
            <div>
                <img src={imageitem.image} alt="" />
                <p className="overlay">
                    <span>
                        {imageitem.name}
                    </span>
                </p>
            </div>
            </div>

        )
    })



    return(
        <div className="products">
            <h2 className="products-title">Our Products</h2>
            <div>{prooductsImages}</div>
        
        </div>
    )
}
export default Products ;