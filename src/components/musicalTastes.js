import React from "react";
import "./musicalTastes.css";

export default function musicalTastes(){
    return(
        <section className="musicalTastes" id="musicalTastes">
            <div className="galleryMusic">
                <img src={require('./img/tambor.jpg')}/>
            </div>
            
            <div className="text">
                <h1>Musical tastes</h1>
                <h3>In the musical realm, I can say that I have been both a participant
                and a spectator.</h3>
                <p>
                Since I was a child, my parents supported me in learning
                how to play traditional percussion instruments.
                </p>
                <p>
                I was part of a musical group called "Cabildo" located in
                "La Boquilla", until a few years ago. After that, I continued
                learning other instruments such as guitar, conga, bongo, among others.
                Regarding my tastes, I can enjoy all musical genres and appreciate their
                cultural significance in the history of music. I don't like to judge any
                genre and prefer to have opinions about each one, whether they are good or bad.
                Among my favorite genres are salsa, rap, reggaeton, reggae, bachata, the typical
                genres of my region, vallenato, trap, pop, champeta, among others.
                </p>
            </div>
        </section>
    )
}