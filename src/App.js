import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/Style.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Services from "./Services";



class App extends Component{
  render(){
      return(
        <BrowserRouter>
            <div>
              <Navigation logoTitle="My Portfolio"/>
              <Route exact path="/" render={()=><Home title="Hello,I'm Luma" 
              subTitle1="I'm a Website Developer/WordPress Developer" 
              subTitle2="I developed my Portfolio using ReactJs, ReactDOM and React-MDL" 
              button="My Work"/>}/>
              {/*if you dont want to pass ant props just put component */}
              <Route path="/Resume" component={Resume} />
              <Route path="/Services" render={()=><Services />}/>
              <Route path="/Projects" render={()=><Projects />}/>
              <Route path="/Contact" render={()=><Contact />}/>
              {/*<Home title="My Portfolio" button="Find out More"/>*/}
              
              <Footer/>
            </div>
            
        </BrowserRouter>
      );
  }  
}


export default App;
