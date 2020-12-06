const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 3000;
const DB =  process.env.MONGODB_URI;

module.exports = {
  HOST,
  PORT,
  DB
}