import React from "react";
import "./hobbies.css";
import GalleryLearn from './galleryLearn';
import GallerySports from './gallerySports';
import GalleryGames from './galleryGames';

export default function hobbies(){
    return(
        <section className="hobbies" id="hobbies">
            <h1 className="title">~ Hobbies ~</h1>
            <section className="sports">
                <div className="text">
                    <h1>Sports</h1>
                    <h3>Since I was a child, I have been quite active.</h3>
                    <p>I have always liked to go out and play outside and practice
                        different sports such as soccer, swimming, tennis, volleyball,
                        baseball, athletics, cycling, parkour, and basketball.
                    </p>
                    <p>
                    Currently, although I know and understand how to play various sports,
                    the one that really excites me is basketball, both watching and playing it.
                    I train four days a week simply because I enjoy doing it and have fun playing
                    and improving in it. I also consider it the most complete and demanding sports
                    discipline of all.
                    </p>
                    <p>
                    I have an excellent physical condition since I keep doing sports almost every day,
                    and my means of transportation is a bicycle with which I go to university every day.
                    </p>

                </div>
                <div className="gallerySports">
                    <GallerySports/>
                </div>
                
            </section>
            
            <section className="videoGames" id="games">
                <img src={require('./img/setup.jpg')}/>
                <div className="text">
                    <h1>Play video Games</h1>
                    <h3>The importance of games in my life</h3>
                    <p>
                    During a certain period of my life, video games were a great help in dealing with some
                    difficult situations I was going through; they distracted me from reality and helped me
                    strengthen my relationships with some friends. Some of my favorite video games have been
                    </p>
                    <h3>Some games are:</h3>
                    <p>
                    League of Legends
                    The Legend of Zelda, in various installments,
                    The God of War series,
                    GTA San Andreas,
                    GTA V,
                    Moto GP,
                    Valorant,
                    Minecraft,
                    Tetris,
                    Pacman,
                    Call of Duty Black Ops II, especially the Zombies mode,
                    Fortnite,
                    Mario Bros,
                    Pokemon,
                    Halo,
                    Borderlands,
                    Fifa,
                    The King of Fighters,
                    Naruto Storm games.

                    </p>
                </div>
            </section>
            <div className="galleryGames">
                <GalleryGames/>
            </div>

            <section className="learn" id="learn">
                <div className="text">
                    <h1>Learn about new things</h1>
                    <h3>Learning things is a big part of my life.</h3>
                    <p>
                    learning even just a little bit about many things, which makes
                    you capable of socializing in any setting and broadening your
                    worldview by listening to or reading about others. My favorite
                    topics are music, history, philosophy, digital technologies, motocycles,
                    and my regional and Afro-Colombian culture.
                    </p>
                </div>
                
                <div className="galleryLearn">
                    <GalleryLearn/>
                </div>
            </section>

        </section>
    )
}