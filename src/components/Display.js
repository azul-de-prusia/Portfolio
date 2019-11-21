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
                <a href="https://azul-de-prusia.github.io/Burger-Queen/" tittle="Burger Queen Front-End">
                <img src="https://i.ibb.co/PFckHhm/Captura.png" className="burger" alt="Burger Queen"/> </a>
            </div>
            </li>
            <li>
         <div className='mdlinks'> 
                <a href="https://i.ibb.co/84KVm4s/Capturas.jpg" tittle="md links">
                <img src="https://i.ibb.co/84KVm4s/Capturas.jpg"  className="mdlink" alt="Md links"/> </a>
            </div>
            </li>
            <li>
         <div className='datalovers'> 
                <a href="https://azul-de-prusia.github.io/GDL003-data-lovers/src/" tittle="data lovers" width="50px" height="30px">
                <img src="https://i.ibb.co/WWm2y43/datalovers.jpg"  className="rick" alt="Data lovers"/> </a>
            </div>
            </li>
            <li>
         <div className='cipher'> 
                <a href="https://azul-de-prusia.github.io/GDL003-cipher/src/" tittle="cipher" width="50px" height="30px">
                <img src="https://i.ibb.co/mHfDgwV/cipher.jpg"  className="cipher" alt="Cipher"/> </a>
            </div>
            </li>
            </ul>
    </div>
       );
    }
};

export default Display;