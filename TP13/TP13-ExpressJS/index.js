const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('./src/config/index')()


require('./src/config/session')(app);




app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}))

app.use(bodyParser.urlencoded({ extended:true }));
// app.use(bodyParser.json());
app.use("/uploads",express.static('uploads'));
app.use(express.json());
app.use(require('./src/routes'));


app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})