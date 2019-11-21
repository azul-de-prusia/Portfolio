import React, {Component} from 'react';
import '../App.css';

class About extends Component{
    render(){
        return(
            <div className="About">
                <h1>About me</h1>
                <ul>
                    <li>
                            <p>Just studied Front-End development in Laboratoria´s bootcamp with the latest technologies of the field. I have a B.D in restoration of cultural heritage, and I got specialized in paper restoration through the years. I´m also a self taught illustrator and madonnari artist. I’m a very creative person who loves to learn new things, currently I'm beginning my career at IT and I would love improve my Front-End skills and to learn more about UX/UI tools.</p>
                            <p> I would love to collaborate with a company that appreciates creative work, visual and audiovisual content.
                        In long term I would like to develop tools to become a creator of audiovisual content such as animation and videogames.</p>
                    </li>          
                    <li>
                        <h2>Languages</h2>
                            <p>Native Spanish</p>
                        <p>English B2 level according to the Common European Framework of Reference for Languages (CEFR)</p>
                    </li>
                <li>
                    <img src="https://i.ibb.co/Gx6j0z6/giphy.gif" alt="" className="gif"></img>
                </li>
             </ul>            

            </div>

        );

    }
};

export default About;

