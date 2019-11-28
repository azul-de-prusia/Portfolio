import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './components/navigation';
import Header from './components/header';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router} from 'react-router-dom';

class App extends Component {
    render() {
        return(
            <div>
                <Router>
                <Navigation navTitle="Tegthyn Coral Quiñones Gutiérrez"/>
                
                <Routes></Routes>
                </Router>
            </div>
        );
    }
    
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
