import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Display extends Component {
    
render() {
    return(
    <div className="linkscontainer">
        <h1>Display projects</h1>
        <p>Click on an image to see more about each project.</p>
        
        <h2>UI / UX collaborations</h2>
        <ul>
        <li>
         <div className='mdlinks'> 
                <p className='sub'>Amco UI / UX projects sample. </p>
                <p>English method interfaces for websites and native apps for users as teachers, students, parents, school admins, etc.</p>
                <Link to="/Amco" >
                <img src="https://www.tomasmoro.ec/wp-content/uploads/2019/06/AMCO.png" className="mdlink" alt="Burger Queen"/> </Link>
               
            </div>
            </li>
            <li>
         <div className='mdlinks'> 
         <p className='sub'>Tipsi collaboration. </p>
             <p>Hybrid app for buying wine with home delivery, visual upgrades on the user interface according to the stakeholders needs. </p>
                
                <Link to="/Tipsi" ><img src="https://i.ibb.co/7bkp3fR/Captura-de-pantalla-de-2020-09-13-15-22-48.png"  className="mdlink" alt="Md links"/> </Link>
                
            </div>
            </li>
        
       
            </ul>
            <ul>
                <li>
                    <h2>Video game illustration</h2>
                <div className='cipher'> 
            <p className='sub'>Ikigai.</p>
            <p> 
                Video game for web developed within a week for the 2020 edition of Women in Game Jam, I contributed with the character creation and illustration of backgrounds, assets and characters. Click on the image to display the game</p>
                <a href="https://nataliajaimes.itch.io/ikigai" tittle="cipher" width="50px" height="30px">
                <img src="https://i.ibb.co/vjRgV4n/ezgif-com-gif-maker.gif"  className="Cipher" alt="Cipher"/> </a>
            </div>
                </li>
            </ul>
    </div>
       );
    }
};

export default Display;