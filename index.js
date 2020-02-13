var express=require('express');
var router = express.Router();
var nodemailer = require('nodemailer');//importing node mailer
var cors = require('cors');

/*Transport service is used by node mailer to send emails, it takes service and auth object as parameters.
here we are using gmail as our service
In Auth object , we specify our email and password
*/
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
transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });
  router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message}`
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
        text: content
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
        }
      })
    })
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use('/', router)
    app.listen(3000,()=>console.log('server started.....'));




