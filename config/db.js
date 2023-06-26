import { connect } from "mongoose";
connect(process.env.LINK_DB)////conecto con el link de la db guardado en la variable de entorno del archivo
.then(()=>console.log("connected to data base"))///devuelve una promesa por lo que es necesario configurar
.catch((error)=>console.log(error))//then y cacht