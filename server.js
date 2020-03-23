const express = require('express');
const app = express();
const log = console.log;
const path = require('path')
const PORT = 8080;
//const router = express.Router();

//chunk 2
//Data parssing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.post(('/email', (req, res) => {
    //send email here
    console.log('Data: ', req.body)
    res.json({messag:'Message recieved!!!'})
}));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})


app.listen(PORT, () => log('Server is starting on PORT, ', 8080));