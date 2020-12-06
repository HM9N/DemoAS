const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 3000;
const DB =  process.env.MONGODB_URI || 'mongodb+srv://demoAS:demo@cluster0.ffqgt.mongodb.net/demoAS?retryWrites=true&w=majority';

module.exports = {
  HOST,
  PORT,
  DB
}