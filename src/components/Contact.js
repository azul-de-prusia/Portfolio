import React, {Component} from 'react';
import '../App.css';

class Contact extends Component{
    render(){
        return(
            <div className="contact">
                
                <h1>Contact info</h1>
                <ul>
                    <li className="tex">
                    <h3><img src="https://i.ibb.co/DkyDQcw/portfolio.png" className="icon"/>  Curriculum Vitae</h3><a href="https://drive.google.com/file/d/1_GhmersE6eA96P86j7hsO6mEHI_bbTXM/view?usp=sharing" target="_blank" className="href">Curriculum Vitae viewer</a>
                    <h3><img src="https://i.ibb.co/7bmWnsX/linkedin.png" alt="" className="icon" />   LinkedIn</h3><a href="https://www.linkedin.com/in/coral-qui%C3%B1ones-334135192/" target="_blank" className="href">https://www.linkedin.com/in/coral-quignones-/</a>
                    <h3><img src="https://i.ibb.co/NCKHphJ/email.png" alt="" className="iconw" />   Email</h3><a href="mailto:tegthyn_600@hotmail.com" target="_blank" className="href">tegthyn_600@hotmail.com</a>
                    <h3><img src="https://i.ibb.co/TRM6FvC/github.png" alt="" className="icon" />   Github</h3><a href="https://github.com/azul-de-prusia" target="_blank" className="href">https://github.com/azul-de-prusia</a>

                    </li>
                    <li>
                        <img src="https://i.ibb.co/ZxnxNgG/5-copia.jpg" className="background" alt ="" title="Deer by Azul de Prusia"></img>
                    </li>
                </ul>
            </div>

        );

    }
};

export default Contact;