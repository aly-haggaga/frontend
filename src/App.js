import React ,{Component} from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom' ;
import Contact from './Components/Contact' ;
import Nav from './Components/NavBar' ;
import Index from './Components/Index';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        
        <Nav />
        <Route exact path='/' component={Index} />
        <Route path='/contact' component={Contact} />

      </BrowserRouter>
    )
  }
}
export default App;
