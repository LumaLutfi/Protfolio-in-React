import React,{Component} from 'react';
import './FormApp';
import axios from 'axios';


class FormApp extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            company:'',
            email:'',
            phone:'',
            message:''
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onCompanyChange=this.onCompanyChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneCange=this.onPhoneChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    onNameChange(event){
      this.setState({name:event.target.value})
      }
    onCompanyChange(event){
        this.setState({company:event.target.value})
        }
    onEmailChange(event){
         this.setState({email: event.target.value})
       }
       onPhoneChange(event){
        this.setState({phone:event.target.value})
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
            this.resetForm()
          }else if (response.data.status === "fail"){
            alert("Message faild to send.")
          }
        })    
    }
    resetForm = () => {
      this.setState({
          name: '',
          company:'',
          email: '',
          phone:'',
          message: '',
          buttonText:'Message sent'
      })
  }
    render(){
    return(
      <div className="contanier">
      <div className="wrapper">
      <div className="company-info">
      
        </div>
      <div className="contact">
      <h3>Email Me</h3>
      <form onSubmit={this.handleSubmit} method="POST" action="send"> 
        <p>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.onNameChange}></input>
          </p>
          <p>
            <label>Company</label>
            <input type="text" name="company" value={this.state.company} onChange={this.onCompanyChange}></input>
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" name="email" value={this.state.email} onChange={this.onEmailChange}></input>
          </p>
          <p>
            <label>Phone Number</label>
            <input type="text" name="phone" value={this.state.phone} onChange={this.onPhoneCange}></input>
          </p>
          <p className="full">
            <label>Message</label>
            <textarea name="message" rows="5" value={this.state.message} onChange={this.onMessageChange}></textarea>
          </p>
          <p className="full">
            <button type="submit" >Submit</button>
          </p>

      </form>

      </div>
      </div>
      </div>  
    
    );    
}
}
export default FormApp;
         

    



