//Importar express - ES Modules (ESM)
import express from 'express';

//Inicializar express
const app = express ()

//RUTA
//Integrantes
app.get('/',(req, res)=>{
    res.json([
        {
            id:1,
            nombre:"Paul",
            apellido:"Cabrera",
            edad:20,
            carrera:"Desarrollo de Software"
        },
        {
            id:2,
            nombre:"Mireya",
            apellido:"García",
            edad:20,
            carrera:"Desarrollo de Software"
        },
        {
            id:3,
            nombre:"Mateo",
            apellido:"Torres",
            edad:20,
            carrera:"Desarrollo de Software"
        },
        {
            id:4,
            nombre:"Ariel",
            apellido:"Catucuamba",
            edad:20,
            carrera:"Desarrollo de Software"
        },
        {
            id:5,
            nombre:"Matias",
            apellido:"Terán",
            edad:21,
            carrera:"Desarrollo de Software"
        },
        {
            id:6,
            nombre:"Anthony",
            apellido:"Astudillo",
            edad:21,
            carrera:"Desarrollo de Software"
        }
    ])
});

app.listen(3000);
console.log("Server OK");