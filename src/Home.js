import React, {Component}from 'react';
import './css/Home.css';
import Background from './img/eugene-chystiakov-1381895-unsplash.jpg';

const sectionStyle={
    width: '170vh',
    height: '120vh',
    backgroundImage: `url(${Background} )`,
    backgroundSize:'cover',
    backgroundPosition: 'center'
};
class Home extends Component{
    render(){
        return(
            <div className="main-content">
            <div className="container">
            <div style={sectionStyle}>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle1}</h2>
                <h2>{this.props.subTitle2}</h2>
                <a className="button" href="/Projects">{this.props.button}</a>
            </div>
            </div>
            </div>
        );
    }
}                   

export default Home;