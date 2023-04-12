import React from "react";
import "./aboutMe.css";
import Gallery from './galleryMe';

export default function aboutMe(){
    return(
        <section className="aboutMe" id="aboutMe">
            <div className="text">
                <h1>About Me</h1>
                <h3>My full name is César Hernando Leiva Acuña, i'm 20 years old.</h3>
                <p>I was born in Cartagena on August 6, 2002 and I've always lived here.
                    Actually I'm studying systems engineering at the University of Cartagena
                    and I'm in my eighth semester.
                </p>
                <p>
                    I'm a dedicated, committed, and understanding person who always seeks to learn
                    new things and excel in all areas of my life.
                </p>
                <p>
                    Constantly learning new things has made me interested in various topics, among which
                    I can say that I have a great taste for music, video games, digital technologies, sports,
                    motorcycles, history, philosophy, and the culture of my region.
                </p>
            </div>
            <div className="galleryMe">
                <Gallery/>
            </div>
        </section>
    )
}