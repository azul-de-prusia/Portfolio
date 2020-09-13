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
                        <p>Self driven</p>
                        <p>Patient</p>
                        <p>Adaptable</p>
                        <p>Good writting</p>
                        
                            </li>
                            
                        <h3 className="tech">Technical</h3>

                        <li>
                        <p>Sketch</p>
                        <p>Adobe Photoshop</p>
                        <p>Adobe Illustrator</p>
                        <p>Adobe XD</p>
                        <p>Krita</p>
                        <p>Corel Draw</p>
                        <p>Figma</p>
                        <p>Balsamiq</p>
                        <p>InVision</p>
                        <p>Slack</p>
                        <p>Jira and Trello</p>
                        
                            </li>

                        <li>
                        <p>Responsive web design</p>
                        <p>Javascript ES6</p>
                        <p>HTML 5</p>
                        <p>CSS3</p>
                        <p>React js</p>
                        <p>Node js</p>
                        <p>Agile methodology</p>
                        <p>Git</p>
                        <p>Canvas HTML</p>
                        <p>SQL</p>
                        </li>

                        </ul>
            </div>

        );

    }
};

export default Skills;