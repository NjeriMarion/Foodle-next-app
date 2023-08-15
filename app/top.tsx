import React from "react";

const Top = () =>{
    return(
        <div className="background-colour = #ffd43b ml-10 mt-6">
            <ul className="display = flex  padding-left = 5%">
                <li>
                    <h1>All fast food <br/> available at Foodle</h1>
                    <p>We Are Just A Click Away When You <br/> Crave For Delicious Fast Food.</p>
                    <button id="buy">Buy Now</button>
                    <button id="how">How To Order</button>
                </li>
                <li>
                    <img src={'/sandwich.png'} alt="sandwich" />
                </li>
            </ul>
            <ul className="md:flex space-x-12">
                <div>
                    <h3>Fast Delivery</h3>
                    <p>The food will be delivered to <br/> your home within 1-2 Hours of <br/> your ordering</p>
                </div>
                <div>
                    <h3>Fresh food</h3>
                    <p>The food will be delivered to <br/> your home within 1-2 Hours of <br/> your ordering</p>
                </div>
                <div>
                    <h3>Free Delivery</h3>
                    <p>The food will be delivered to <br/> your home within 1-2 Hours of <br/> your ordering</p>
                </div>
        
            </ul>
        </div>
    )
}
export default Top