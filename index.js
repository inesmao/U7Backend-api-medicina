//const express = require('express');  -> así NO se debe usar es anticuado
import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';

//iniciar el servidor
const app = express();

//permitir leer archivos .enc
dotenv.config();

//conectarnos a la base de datos MongoBD
conectarDB();

const PORT = process.env.PORT || 4000;

//lanzar la aplicación
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});
