import React, {Component} from 'react';
import '../App.css';

class About extends Component{
    render(){
        return(
            <div className="About">
                <h1>About me</h1>
                <ul>
                    <li className="paragraph">
                        <p> I’m a creative person who loves to learn new ways to apply and improve my creative skills.
                            I currently work as a UI / UX designer collaborating with teams to create usefull and aesthetic websites and apps.
                            In the last years I have learned by myself digital illustration, some 2d animation, web development and UI Ux design, looking for new ways to apply my passion for drawing and learning.
                           </p>
                            
                                <p>I have a background as a profesional restorer-conservator. On my spare time I love to visit museums, paint watercolor, engrave, draw, watch art cinema and cartoon series.
                                 </p>
                            
                    </li>          
                    <li className="small">
                    <p> I would love to collaborate with a company that appreciates creative work as well as visual and audiovisual content.</p>
                        <h2>Languages</h2>
                            <p>Native Spanish</p>
                        <p>English B2 level according to the Common European Framework of Reference for Languages (CEFR)</p>
                    </li>
                <li className="small">
                    <img src="https://i.ibb.co/Gx6j0z6/giphy.gif" alt="" className="gif"></img>
                </li>
                <li className="small2">
                <h2>Education</h2>

                    <p> Laboratoria, Guadalajara. 6 months self learning coding bootcamp for women with front - end developer profile.</p>
                    <p>Western School of Conservation and Restoration (ECRO) Guadalajara. Bachelor's degree in Conservation - Restoration of Cultural Heritage. </p>
                    <p>University of Guadalajara. Professional IT technician.</p>

                <h2>Worksophs</h2>

                    <p> iOS design Workshop taught by Néstor Martínez Ostoa from APL Community. UI UX design workshop focused on iOS apps design.</p>
                    <p>Masterclass: The art of building successful videogames. Taught by Mihai Sfrijan, Head of Studio in Amber Studio</p>
                    <p>How to make a comic in 4 strips or 5739 pages with the same pencil? Taught by La patografica editorial on FIL Gdl. Storyboards and storytelling in a small comic, how to give space and time ilusion with graphics.</p>    
                    
                </li>

             </ul>            

            </div>

        );

    }
};

export default About;

