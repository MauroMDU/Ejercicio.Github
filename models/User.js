import {Schema, model} from "mongoose"
//cluster: conjunto de base de datos, el link de mongo que obtiene es del cluster)
//db: conjunto de colecciones (coleccion hace referencia a recurso y recurso hace referencia a los modelos de datos que necesita mi app)
//coleccion: conjunto de documentos
//colecciones: usuarios, capitulos, productos, carritos
//documento: dato
//el array de eventos que se fetcheaba en amazing events me traia toda la coleccion de eventos
//cada objeto de ese array era un documento de la coleccion

let collection = "users"        //nombre de la coleccion donde se van a guardar todos los documentos
//los nombres de las colecciones van siempre en plural (porque son un conjunto de)
//van siempre en ingles y tienen que ser descriptivos de un recurso
//recurso category: coleccion categories 
//recurso author => coleccion authors

let schema = new Schema({             
    //defino el primer objeto con las propiedades necesarias del modelo 
    email: {type:String, required:true},
    password: {type:String, required:true},
    photo: {type:String, required:true},
    role: {type:Number, required:true},
    online: {type:Boolean},
    verified: {type:Boolean, required:true},
    verify_code: {type:String, required:true},
},{                                   //timestamps
    timestamps:true
})

let User = model(collection, schema)
export default User