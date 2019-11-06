import React from 'react';
import './style.css'
const Recipes=()=>{
    return(
        <div className="work">
            <div className="container">
                <h2 className="work-title">Our Recipes</h2>
                <div className="part first">
                    <h4 className="part-title">Salmon Croquettes</h4>
                    <hr className="line"/>
                    <p className="part-desc">
                    Combine salmon, eggs, cracker crumbs, salt, and pepper in a medium mixing bowl; mix well.</p>
                </div>
                
                <div className="part sec">
                    <h4 className="part-title">Grilled Shrimp Scampi</h4>
                    <hr className="line"/>
                    <p className="part-desc">
                    Shrimp marinated in lemon, garlic, and parsley for 30 minutes, then grilled. Can be used as an appetizer or main dish.
                    </p>
                </div>
                
                <div className="part third">
                    <h4 className="part-title">Dragon Rolls</h4>
                    <hr className="line"/>
                    <p className="part-desc">
                    Mix the tempura with a little bit of water and stir until combined to a thick even mixture. Cut off shrimp tails.
                    </p>
                </div>
                
            </div>
        </div>
    )
}
export default Recipes ;