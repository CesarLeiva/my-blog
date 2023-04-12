import React from "react";
import "./family.css";
import Gallery from './galleryFamily';

export default function family(){
    return(
        <section className="family" id="family">
            <div className="text">
                <h1>My family</h1>
                <h3>I have a small but close-knit family.</h3>

                <p>
                I live with my mom and younger brother, and I have two other
                sisters from my dad's side. My parents are separated, but both
                support me, with my mom being more involved. My closest family members,
                besides those living with me, are my maternal grandmother, my uncle,
                his wife, and my cousins Kevin, Sintia, and Yarle.
                </p>
            </div>

            <div className="galleryFamily">
                <Gallery/>
            </div>
        </section>
    )
}