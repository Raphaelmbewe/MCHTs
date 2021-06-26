import React from "react";
import './header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from '../../images/hero.png';

export const MainHeader = () =>{
    return(
        <article className="container Main-Text-Tag firstHeader-mainContent">
            <div className="row">
                <div className="col-md-4">
                    <h1 className="text-left ml-3">Virtual healthcare <br/> for you</h1>
                    <p className="text-secondary text-left container">MCH provides progressive, and affordable
                     health, accessible on mobile and online for everyone</p>
                     <button className="myButton text-light">Consult today</button>
                </div>
                <div className="col-md-8 pl-md-5 Hero">
                    <img src={Hero} alt=""  className="img-fluid"/>
                </div>
            </div>
        </article>
    )
}