import React, {Component} from 'react';
import '../App.css';

class About extends Component{
    render(){
        return(
            <div className="About">
                <h1>About me</h1>
                <ul>
                    <li className="paragraph">
                        <p>I´m a curious person with wide interests who is constantly searching for new knowledge.
                            I recently attended at Laboratoria, a 6 months Javascript intensive  coding bootcamp to become a Front End developer. I would like to
                                keep growing as a developer and learning new tools and skills in this great growing field of the IT industry.</p>
                            
                                <p>I have a B.D  in Cultural Heritage Restoration, and through out my 7-year career, I specialized  in paper restoration. 
                                I´m also a self taught illustrator and madonnari artist.
                                I’m a very creative person who loves to learn new things. </p>
                            
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
             </ul>            

            </div>

        );

    }
};

export default About;

