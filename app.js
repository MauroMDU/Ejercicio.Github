import 'dotenv/config.js' //configurar las variables de entorno
import "./config/db.js" // configurar la conexion con la base de datos
import express from 'express';//para levantar y confirmar un servdidor
import path from 'path';//conocer la ubicacion de nuestro servidor

import logger from 'morgan';//registrar las peticiones que registra el servidor
import cors from 'cors'; //modulo para permitir servidores cruzados (front una funcion)
import { __dirname } from './utils.js';
import indexRouter from './routes/index.js' ;//enrutador principal de la aplicacion


let app = express();

// views
//set metodo que configura algo
app.set('views', path.join(__dirname, 'views')); //configuro que las vistas generadas en el backeend estan en la carpeta 
app.set('view engine', 'ejs');//configuro que las vistas se van a definir con el lenguaje de EJS  

//Middlewares
//son funciones que se ejecutan con cada peticion y que van a permitir / Permitir realizar algo
//es un metodo que obliga (en este caso) a mi aplicacion a usar algo (ejecutar una funcion)
app.use(logger('dev'));//Obliga al servedor a usar el middlewares de registro de peticiones
app.use(express.json());//obliga al servidor a transformar /manejar formato json (post/put)
app.use(express.urlencoded({ extended: false }));//obliga al servidor a acceder a consultas conplejas (querys y params)
app.use(express.static(path.join(__dirname, 'public')));// obliga al servidor a generar 

//endpoints
app.use('/api', indexRouter);//obligo al servidor a usar las rutas definidas en el enrutador principal con la palabrita '/api'
app.use(cors())                                           //obliga al servidor a permitir el cruce de origines de front/back


export default app