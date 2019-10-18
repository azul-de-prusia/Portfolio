import React, {Component} from 'react';

class links extends Component {
    
render() {
    return(
    <div className="linkscontainer">
        <p className="text">Click on the pictures to open up the project you want to see</p>
         <div className='burgerqueen'> 
                <a href="https://azul-de-prusia.github.io/Burger-Queen/" tittle="Burger Queen Front-End">
                <img src="https://i.ibb.co/PFckHhm/Captura.png" alt="cipher"/> </a>
            </div>
         <div className='mdlinks'> 
                <a href="https://i.ibb.co/84KVm4s/Capturas.jpg" tittle="md links">
                <img src="https://i.ibb.co/84KVm4s/Capturas.jpg" alt="cipher"/> </a>
            </div> 
         <div className='datalovers'> 
                <a href="https://azul-de-prusia.github.io/GDL003-data-lovers/src/" tittle="data lovers" width="50px" height="30px">
                <img src="https://i.ibb.co/WWm2y43/datalovers.jpg" alt="cipher"/> </a>
            </div>
         <div className='cipher'> 
                <a href="https://azul-de-prusia.github.io/GDL003-cipher/src/" tittle="cipher" width="50px" height="30px">
                <img src="https://i.ibb.co/mHfDgwV/cipher.jpg" alt="cipher"/> </a>
            </div>
    </div>
    );
    }
};

export default links;