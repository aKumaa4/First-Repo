require('dotenv').config()

const express = require('express');

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

//This is a test route wtffffff
//This is a test route
