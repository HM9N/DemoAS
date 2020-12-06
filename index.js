const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Demo');
});

app.listen(3000, ()=>{
    console.log("el servidor está corriendo");
})