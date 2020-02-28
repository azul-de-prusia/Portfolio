import React, {Component} from 'react';

class Display extends Component {
    
render() {
    return(
    <div className="linkscontainer">
        <h1>Display projects</h1>
        <p className="text">Click on the pictures to open up the project you want to see</p>
        <ul>
        <li>
         <div className='burgerqueen'> 
                <p>React js web for ordering food at a thematic restaurant</p>
                <a href="https://azul-de-prusia.github.io/Burger-Queen/" tittle="Burger Queen Front-End">
                <img src="https://i.ibb.co/PFckHhm/Captura.png" className="burger" alt="Burger Queen"/> </a>
            </div>
            </li>
            <li>
         <div className='mdlinks'> 
         <p>Node library build to find broken links within .md files, runs in CLI</p>
                <a href="https://i.ibb.co/84KVm4s/Capturas.jpg" tittle="md links">
                <img src="https://i.ibb.co/84KVm4s/Capturas.jpg"  className="mdlink" alt="Md links"/> </a>
            </div>
            </li>
            <li>
         <div className='datalovers'> 
                <p>Javascript web for filtering, showing data in different ways by using array methods</p>
                <a href="https://azul-de-prusia.github.io/GDL003-data-lovers/src/" tittle="data lovers" width="50px" height="30px">
                <img src="https://i.ibb.co/WWm2y43/datalovers.jpg"  className="rick" alt="Data lovers"/> </a>
            </div>
            </li>
            <li>
         <div className='cipher'> 
            <p>Hackathon type of project, made in React js build in 36 hours for improving Bosch mobility</p>
                <a href=" https://lauramayar.github.io/Boscheck/" tittle="cipher" width="50px" height="30px">
                <img src="https://i.ibb.co/YyG9Q2q/Capturabpo.jpg"  className="Cipher" alt="Cipher"/> </a>
            </div>
            </li>
            </ul>
    </div>
       );
    }
};

export default Display;