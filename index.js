require("dotenv").config();
const database = require('./config/database');
const CONFIG = require('./config/config');
const app = require('./app');

// conectar
database.connect();

app.get("/", (req, res) => {
  res.send(`
  <a href="https://documenter.getpostman.com/view/12161478/TVmQeG72">Documentación de la API</a>
  <br>
  Autor: Jhon Vásquez
  version: 0.3`
  );
});

//decir que nuestra app escuche en el puerto
app.listen(CONFIG.PORT, function(error){
    if(error) return console.log(error);
    console.log(`Servidor corriendo en el puerto ${CONFIG.PORT}`);
});
