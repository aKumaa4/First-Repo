require('dotenv').config()

const express = require('express');

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

//This is a test route wtffffff

//FKING SHETTT


//ETOOO AKOO NAGI ISISAISIA

app.get('/', (req, res) => {
    res.send('Hello World');
}); 


console.log(process.env.PORT);
console.log(process.env.DATABASE_URL);
console.log(process.env.SECRET_KEY); //tama man yata ni dirigi


//Trying gitlens