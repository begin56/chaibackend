// console.log("chai aur code");


require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
app.get('/',(req, res) => {
    res.send('Hello World')
})

app.get('/login',(req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/twitter',(req,res) => {
    res.send('hiteshdotcom')
})

app.get('/yahoo', (req,res) => {
    res.send('You are at yahoo');
})

app.get('/youtube',(req,res) => {
    res.send('<h2>Coffee aur code </h2>')
    
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`);
})