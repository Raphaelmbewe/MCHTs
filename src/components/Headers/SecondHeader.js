import React from "react";
import './header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Hero2 from '../../images/hero2.png';
import Element from '../../images/element2.png'

export const MainHeader2 = () =>{
    return(
        <article className="container ">
            <div className="row">
                <div className="col-md-8 pl-md-5 Hero">
                    <img src={Hero2} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-4 ">
                    <div className="text-left ml-3">
                    <h1>Leading healthcare <br/> providers</h1>
                    <div className="line2 mt-4"></div>
                    </div>
                    <p className="text-secondary text-left container">
                        MCH provides progressive,and affordable healthcare, accessible on mobile 
                         and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver
                     </p>
                     <button className="button-for-learn-more2 ">Learn more</button>
                </div>
            </div>
            <div className="Image-dotted2">
                <div className="   align-items-end ">
                    <img src={Element} alt="" className="img-fluid"/>
                </div>
            </div>
                
        </article>
    )
}