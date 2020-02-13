import React,{Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent, Content} from 'react-mdl';
import './css/contact.css';
import FormApp from './form/FormApp';
import './form/FormApp.css';



class Contact extends Component{
render(){
    return(
        
        <div className="contact-body">
        <Content>
        <Grid className="contact-grid">
        <Cell col={6}>
        <h1 style={{color:'black'}}>Luma Altaae</h1>
        <img src="https://cdn.impactinit.com/cdn/x/x@82e4a27fd3/smss52/smsimg30/pv/isignstockcontributors/iss_18508_00897.jpg"
        alt='avatar' style={{height:'250px'}}/>
        <p style={{width:'90%', margin:'auto',paddingTop:'1em', textAlign:'left'}}>
        <li>Expertise in Statistics and IT enriched with a recent graduation in Object Oriented Software Development Certificate from SAIT, Alberta.</li>
        <li>Strong programming expertise in several languages; PHP, JavaScript, CSS, HTML, SQL, Server, Git, Javascript and WordPress.</li>
        <li>Strong understanding of professional web development best practices.</li>
        <li>Ability to manage multiple projects using efficient time management and organizational skills.</li>
        <li>Experience in working through development stage from design to deployment.</li>
        I am open to any new opportunities that are out there in this field.
        </p>
        </Cell>
        <Cell col={6}>
        <h1>Contact Me</h1>
        <hr/>
        <div className='contact-list'>
            <List>
            <ListItem>
                <ListItemContent style={{fontSize:'28px',fontFamily:'Anton'}}>
                <i className='fa fa-phone-square' aria-hidden='true'/>
                (403) 616-8775
                </ListItemContent>
            </ListItem>
            <ListItem>
                <ListItemContent style={{fontSize:'28px',fontFamily:'Anton'}}>
                <i className='fa fa-envelope' aria-hidden='true'/><a style={{color:'black'}}
                href='mailto:luma_kamal@yahoo.com'>luma_kamal@yahoo.com</a>
                </ListItemContent>
            </ListItem>
            <ListItem>
                <ListItemContent style={{fontSize:'28px',fontFamily:'Anton'}}>
                <i className='fa fa-google-plus-square' aria-hidden='true'/><a style={{color:'black'}}
                href='mailto:lumalutfi1@gmail.com'>lumalutfi1@gmail.com</a>
                </ListItemContent>
            </ListItem>
            <ListItem>
                <ListItemContent style={{fontSize:'28px',fontFamily:'Anton'}}>
                <i className='fa fa-linkedin' aria-hidden='true'/>
                <a style={{color:'black'}}href='https://www.linkedin.com/in/luma-lutfi-426771142/'>
                www.linkedin.com/in/luma-lutfi-426771142</a>
                </ListItemContent>
            </ListItem>
            </List>
        </div>
        </Cell>
        </Grid>
        </Content> 
        <hr style={{borderTop:'3px solid #e22947',width:'50%', margin:'auto'}}/>
            <Grid>
            
                <FormApp/>
            
            </Grid> 
        </div>
       
    );
 }
}
export default Contact;