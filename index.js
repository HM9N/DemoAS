const express = require('express');

const app = express();

const port = Process.env.PORT || 3000 ;

app.get('/',(req,res)=>{
    res.send('Demo');
});

app.listen(port, ()=>{
    console.log("el servidor está corriendo");
})