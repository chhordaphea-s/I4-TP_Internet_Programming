const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./src/config/index')()


// app.get("/",(req,res) =>{
//     res.send("Hi FROM API");
// })
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(require('./src/routes/user'));


app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})