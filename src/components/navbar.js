import React from "react";
import "./navbar.css";
import Dropdown from './dropdown';

export default function navbar(){
    return(
        <section className="navbar">
            <ul>
                <li><a href="#"><h1>~César~</h1></a></li>
                <div className="li">
                    <li><a href="#aboutMe"><span>About me</span> <img src={require('./img/perfil.png')}/></a></li>
                    <li><a href="#musicalTastes"><span>Musical tastes</span> <img src={require('./img/music.png')}/></a></li>
                    <li><Dropdown/></li>
                    <li><a href="#family"><span>Family</span> <img src={require('./img/family.png')}/></a></li>
                </div>
            </ul>
        </section>
    )
}