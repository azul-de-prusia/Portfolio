import React, {Component} from 'react';
import '../App.css';

class Laboratoria extends Component{
    render(){
        return(
            <div className="linkscontainer">
                <h1>Laboratoria</h1>
                <p>This is a sample of some projects done in Laboratoria, some of them are made individually and some others in small teams in a couple of weeks. In this works we proposed the UI / UX and solve the development front-end </p>
                <p>Click on an image to display the project you like.</p>

                    <ul>
                <li>
                     <div className="lab"> 
                     <p>Boscheck</p>
                     <p>Web app build in a 36 hours hackathon for improving Bosch mobility. This proposal was planed to be used in the Bosch buses to take their collaborators to their workspace on time and improving the routes for hoose buses. It takes data from time and place users abord with a QR reader which was the required by the company plus graphics. Uses React js</p>
                     <a href="https://lauramayar.github.io/Boscheck/#/" target="_blank"><img src="https://i.ibb.co/YWbK2BJ/ezgif-com-gif-maker-1.gif" className="lab" alt="Login"/></a>
                      
                      </div> 
               </li>
               <li>
                     <div className="lab"> 
                     <p>Data Lovers</p>
                     <p>Website for Rick Sanchez be able to filter and sort all characters in Rick and Morty by gender, status (dead, alive, unknown) and by alphabetical order, also shows stats and charts with that data. Uses array methods for showing data</p>
                     <a href="https://izayura.github.io/GDL003-data-lovers/src/" target="_blank"><img src="https://i.ibb.co/WvrzkhB/ezgif-com-gif-maker-4.gif" className="lab" alt="Login"/></a>
                      
                      </div> 
               </li>
               <li>
                     <div className="lab"> 
                     <p>Burger Queen</p>
                     <p>Web app for ordering food at a space thematic restaurant, for tablets. Uses React js</p>
                     <a href="https://azul-de-prusia.github.io/Burger-Queen/" target="_blank"><img src="https://i.ibb.co/zZnjSN8/ezgif-com-gif-maker-3.gif" className="lab1" alt="Login"/></a>
                      
                      </div> 
               </li>
               <li>
                     <div className="lab"> 
                     <p>Ceasar cipher</p>
                     <p>Website for enconding and decoding info, this was my first project and I did it as an art sale galery for undercovering the sale buy of illegal art.</p>
                     <a href="https://azul-de-prusia.github.io/GDL003-cipher/src/" target="_blank"><img src="https://i.ibb.co/dG5bNj7/ezgif-com-gif-maker-2.gif" className="lab" alt="Login"/></a>
                      
                      </div> 
               </li>
              
               </ul>           
            </div>

        );

    };
};

export default Laboratoria;

