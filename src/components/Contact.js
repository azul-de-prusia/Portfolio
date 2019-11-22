import React, {Component} from 'react';
import '../App.css';

class Contact extends Component{
    render(){
        return(
            <div className="contact">
                <h1>Contact info</h1>
                <h3><img src="https://i.ibb.co/s2q6Z60/linked.jpg" alt="" className="icon" />   LinkedIn</h3><a href="https://www.linkedin.com/in/coral-qui%C3%B1ones-334135192/">https://www.linkedin.com/in/coral-qui%C3%B1ones-334135192/</a>
                <h3><img src="https://i.ibb.co/Yj5tQD8/correo.jpg" alt="" className="iconw" />   Email</h3><p>tegthyn_600@hotmail.com</p>
                <h3><img src="https://i.ibb.co/RP1xHwr/github.jpg" alt="" className="icon" />   Github</h3><a href="https://github.com/azul-de-prusia">https://github.com/azul-de-prusia</a>
                <h3><img src="https://i.ibb.co/Cnw9SwW/insta.jpg" alt="" className="icon" />   Instagram</h3><a href="https://www.instagram.com/azul.de.prusia/">azul.de.prusia</a>
                
            </div>

        );

    }
};

export default Contact;