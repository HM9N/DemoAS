require("dotenv").config();
const database = require('./config/database');
const CONFIG = require('./config/config');
const app = require('./app');

// conectar
database.connect();

app.get("/", (req, res) => {
  res.send({"nombre": "Juan"});
});

//decir que nuestra app escuche en el puerto
app.listen(CONFIG.PORT, function(error){
    if(error) return console.log(error);
    console.log(`Servidor corriendo en el puerto ${CONFIG.PORT}`);
});
