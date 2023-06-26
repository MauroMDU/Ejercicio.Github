import { Schema,model } from 'mongoose'
//cluster: conjunto de base de datos (el link de mongo que obtienen es del cluster)
//db: conjunto de colecciones (colección hace referencia a recurso y recurso hace referencia a los modelos de datos que necesita mi aplicación)
//colección: conjunto de documentos 
//colecciones: usuarios, capitulos, productos, carritos 
//documento: al dato
//el array de eventos que se fetcheaba en amazing-events me traia TODA la colección de eventos
//cada objeto de ese array era un documento de la colección

let collection = 'users'
//los nombres de las colecciones van siempre en plural (porque son un conjunto de)
//van siempre en ingles
//tienen que ser descriptivos del recurso
//recurso category => coleccion categories
//recurso author => colección authors
let schema = new Schema({       //defino el primer objeto con las propiedades necesarias para el modelo
    email: { type:String,required:true },
    password: { type:String,required:true },
    photo: { type:String,required:true },
    role: { type:Number,required:true },
    online: { type:Boolean },
    verified: { type:Boolean,required:true },
    verify_code: { type:String,required:true }
},{                             //timestamps
    timestamps:true
})

let User = model(collection,schema)
export default User