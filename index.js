"use strict";

const express = require("express");
require("colors");
const morgan = require("morgan"); //muestra por consola las peticiones que se estan ralizando

const app = express();
//TODO: settings
app.set("appName", "tutorial de express");
app.set("port", 8000);
app.set("view engine", "ejs");
//TODO: middlewares
/* function logger(req, res, next) {
  console.log(
    `Ruta recibida: ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
} */

app.use(express.json()); //para que express entienda los objetos json
app.use(morgan("dev")); //reemplaza a mi función logger

const hostname = "127.0.0.1";
const port = 3000;

//TODO: routs
app.get("/", (req, res) => {
  const data = [
    { name: "jon" },
    { name: "pedro" },
    { name: "luis" },
    { name: "jorge" },
  ];
  res.render("index.ejs", { people: data });
});
app.all("/user", (req, res, next) => {
  console.log("por aqui paso");
  next();
});
// respond with "hello world" when a GET request is made to the homepage
app.get("/user", (req, res) => {
  res.json({
    username: "jorge",
    lastaname: "callejo",
  });
});
app.post("/user/:id", (req, res) => {
  console.log(req.body); //ven en consola mediante postman
  console.log(req.params); //pasar parametros para un id
  res.send("POST REQUEST RECEIVED");
});
app.put("/user/:id", (req, res) => {
  console.log(req.body);
  res.send(`usuario ${req.params.id} actualizado`);
});
app.delete("/user/:userID", (req, res) => {
  res.send(`Usuario ${req.params.userID} ha sido eliminado`); //se elimina el usuario mediante postman
});
//TODO: archivos estaticos
app.use(express.static("public"));

app.listen(app.get("port"), hostname, () => {
  console.log(app.get("appName"));
  console.log(
    `El servidor se está ejecutando en http://${hostname}:${app.get("port")}/`
      .magenta
  );
});

/* const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola Mundo");
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
 */
