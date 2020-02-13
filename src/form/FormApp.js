import React,{Component} from 'react';
import {Form, Row, ControlLabel, FormGroup,FormControl, Button} from 'react-bootstrap';
import './FormApp';
import axios from 'axios';


class FormApp extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            message:''
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    onNameChange(event){
      this.setState({name:event.target.value})
      }
    onEmailChange(event){
         this.setState({email: event.target.value})
       }
       onMessageChange(event){
          this.setState({message: event.target.value})
    }
     handleSubmit(event) {
        event.preventDefault();
        axios({
          method:"POST",
          url:"http://localhost:3000/send",
          data: this.state
        }).then ((response)=>{
          if (response.data.status === 'success'){
            alert("Message Sent.");
            this.restForm()
          }else if (response.data.status === "fail"){
            alert("Message faild to send.")
          }
        })    
    }
    restForm(){
      this.setState({name:``,email:``,message:``})
    }
    render(){
    return(
      <div className="container">
      <p style={{fontSize:'25px'}}>Get in Touch</p>
      <h2 style={{color:'red',fontSize:'16px'}}>"Please feel free to contact me and I will get back to you soon!"</h2>   
          
          <Form horizontal onSubmit={this.handleSubmit} method="POST" action="send">
          <FormGroup>
            <Row componentClass={ControlLabel} sm={2}>
            <ControlLabel>Name:</ControlLabel>  
            <FormControl type="text" className="input" value={this.state.name} onChange={this.onNameChange}/>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row componentClass={ControlLabel} sm={2}>
            <ControlLabel>Email:</ControlLabel>
            <FormControl type="email" value={this.state.email} onChange={this.onEmailChange}/>
            </Row>
          </FormGroup>
            <FormGroup>
              <Row componentClass={ControlLabel} sm={2}>
              <ControlLabel>Message:</ControlLabel>
              <FormControl componentClass="textarea" rows="4" vlaue={this.state.message} onChange={this.onMessageChange}/>
              </Row>
          </FormGroup>
          
          <Button type="submit" className="button">Submit</Button>
        
          </Form>
      </div>
      
    
    );    
}
}
export default FormApp;
         

    



