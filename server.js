const express = require('express');
const path = require('path');
const database = require('./static/database.json');
const multer = require('multer');
const app = express();

app.use(express.static('public'))

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

app.get('/index.html', (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.get('/process_get', (req,res)=>{
    const response = {
        firstName:req.query.first_name,
        lastName: req.query.last_name
    }
    console.log(response);
    res.end(JSON.stringify(response))
})
app.get('/getDatabase',(req,res)=>{
    res.end(JSON.stringify(database));
})

app.post('/file_upload', 
    upload.single('file'),
    (req,res) => res.send('<h2>Upload realizado com sucesso</h2>')
);

app.listen('8081', () => console.log('App na porta 8081'));