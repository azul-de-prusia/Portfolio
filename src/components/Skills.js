import React, {Component} from 'react';
import '../App.css';

class Skills extends Component{
    render(){
        return(
            <div className="skills">
                <h1>Skills</h1>
                    <h3 className="ad">Here is a summary of the soft and technical skills that help me achieve my goals at work</h3>
                        <ul>
                            
                        <h3 className="soft">Soft</h3>
                        <li>
                        <p>Creative</p>
                        <p>Task oriented</p>
                        <p>Resourceful</p>
                        <p>Self learning</p>
                        <p>Team player</p>
                        <p>Organized</p>
                        <p>Responsible</p>
                        </li>
                        <li>
                        <p>Observer</p>
                        <p>Analytical</p>
                        <p>Independent</p>
                        <p>Patient</p>
                        <p>Adaptable</p>
                        <p>Good writting</p>
                        
                            </li>
                            
                        <h3 className="tech">Technical</h3>
                        <li>
                        <p>Javascript ES6</p>
                        <p>HTML 5</p>
                        <p>CSS3</p>
                        <p>React js</p>
                        <p>Node js</p>
                        <p>Agile methodology</p>
                        <p>Git</p>
                        <p>Canvas HTML</p>
                        <p>Image editor; GIMP, Corel Draw, Adobe Photoshop</p>
                        </li>
                        <li>
                        <p>SQL</p>
                        <p>API rest</p>
                        <p>C basic</p>
                       
                        <p>Marvel and Figma prototyping</p>
                        <p>Firebase</p>
                        <p>Responsive web design</p>
                        <p>Slack</p>
                        <p>Trello</p>
                        <p>Krita 2d animation</p>
                            </li>
                        </ul>
            </div>

        );

    }
};

export default Skills;