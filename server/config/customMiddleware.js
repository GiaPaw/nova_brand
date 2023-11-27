const express = require('express')

const app = express()

const CustomMD=()=>{
    app.use((req, res, next) => {
        const date = new Date().toISOString()
        req.requestTime = date
        next()
    });
    
}

module.exports = CustomMD;
