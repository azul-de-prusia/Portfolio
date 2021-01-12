import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Display extends Component {
    
render() {
    return(
    <div className="linkscontainer">
        <h1>Collaborations</h1>
        <p>Click on an image to see more about each project.</p>
        
        <h2>UI / UX design</h2>
        <ul>
        <li>
             <div className='mdlinks'> 
                <p className='sub'>Amco UI / UX projects sample </p>
                    <p>English method interfaces for websites and native apps for users as teachers, students, parents, school admins, etc.</p>
                    <Link to="/Amco" >
                <img src="https://i.ibb.co/6J1N1Cn/logo-website-og-min.jpg" className="mdlink" alt="Amco Advanced methods"/> </Link>
            </div>
        </li>

        <li>
             <div className='mdlinks'> 
                <p className='sub'>Tipsi UI / UX redesign </p>
                    <p>Hybrid app for buying wine with home delivery, visual upgrades on the user interface according to the stakeholders needs. </p>
                <Link to="/Tipsi" ><img src="https://i.ibb.co/7bkp3fR/Captura-de-pantalla-de-2020-09-13-15-22-48.png"  className="mdlink" alt="Tipsi"/> </Link>
                
            </div>
        </li>

        <li>
             <div className='mdlinks'> 
                <p className='sub'>Taycan by Porsche UI / UX</p>
                    <p>Figma Mockups for Taycan the new electric Porsche, design challenge proposal for mobile and desktop versions according to the brand and product aesthetic.</p>
                <Link to="/Taycan" ><img src="https://i.ibb.co/RcF63HJ/po.png"  className="mdlink" alt="Taycan"/> </Link>
                
            </div>
        </li>

        <li>
        <h2>Front-end dev & UI / UX </h2>
            <div className='mdlinks'> 
                <p className='sub'>Laboratoria bootcamp </p>
                     <p>6 months bootcamp with a front-end developer profile, however all UI/UX works are proposed as well for each project</p>
                <Link to="/Laboratoria" ><img src="https://miro.medium.com/max/945/1*3ebT5azEfTrKxANOE3BwyA.jpeg"  className="mdlink" alt="Laboratoria"/> </Link>
            </div>
        </li>
    </ul>

    <ul>
    <h2>Video game illustration</h2>
        <li>
       
            <div className='mdlinks'> 
                <p className='sub'>Ikigai</p>
                    <p> Video game for web developed within a week for the 2020 edition of Women in Game Jam, I contributed with the character creation and illustration of backgrounds, assets and characters. Click on the image to try the game</p>
                    <a href="https://nataliajaimes.itch.io/ikigai" tittle="cipher" width="50px" height="30px">
                <img src="https://i.ibb.co/vjRgV4n/ezgif-com-gif-maker.gif"  className="Cipher" alt="Ikigai"/> </a>
            </div>
        </li>

        <li>
            <div className='mdlinks'> 
                <p className='sub'>La reconstrucción</p>
                    <p>Video game for web developed in a few days for 2020 Game Jam Lab, winner of the honor mention in category "Memory and conflict". I contributed with all illustrations and animations. This game was made in collaboration with la Tertulia museum and inspired by the painting "La cosecha de los violentos" by Alfonso Quijano, Click on the image to try the game</p>
                    <a href="https://angegrohl.itch.io/la-reconstruccion" tittle="cipher" width="50px" height="30px">
                <img src="https://i.ibb.co/4VLMzWT/ezgif-com-gif-maker.gif"  className="Cipher" alt="La reconstrucción"/> </a>
            </div>

        </li>
                
        </ul>
    </div>
       );
    }
};

export default Display;