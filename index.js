const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const key = require('./config/keys');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 5000;
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles : true,
}));

// Routes
app.use('/user', require('./routers/UserRouter'))

//connect mongoDB 
mongoose.connect(key.mongoURI,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connect to MongoDB');
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

app.get('/',(req,res) =>{
    res.send({msg : 'HI'})
})

// Running Server 
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})