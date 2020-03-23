
require('dotenv').config();
var express=require('express');
var router = express.Router();
var nodemailer = require('nodemailer');//importing node mailer
var cors = require('cors');
var bodyParser = require('body-parser');
const app = express()
 // // Body Parser Middleware
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());

/*Transport service is used by node mailer to send emails, it takes service and auth object as parameters.
here we are using gmail as our service
In Auth object , we specify our email and password
*/
router.post('/send', (req, res, next) => {
  const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p> `;
  
  
  var transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    auth: {
    user: 'lumaaltaae@gmail.com',//replace with your email
    pass: 'Luma@1971'//replace with your password
    },
    tls:{
        rejectUnauthorized:false
    }
    
    });
  /*
In mail we specify from and to address, subject and HTML content.
In our case , we use our personal email as from and to address,
Subject is Contact name and
html is our form details which we parsed using bodyParser.
*/
  var mail = {
      from: 'Luma',
      to: 'lumaaltaae@gmail.com',  // Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: output
    }
/*
Here comes the important part, sendMail is the method which actually sends email, it takes mail options and
call back as parameter
*/
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
        transporter.close();
      }
    })
  })

    
    app.use(cors())
    app.use(express.json())
    app.use('/', router)
    
    app.listen(3000,()=>console.log('server started.....'));
    



