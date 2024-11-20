//Requerir modulos 
import express from 'express'

import router from './routers/tour_routes.js'
import routerUsers from './routers/user_routes.js'

//Inializaciones 
const app = express()

app.set('port', process.env.port || 3000)

//  Middleware
app.use(express.json())

//Rutas
//Ruta principal
app.get('/', (req, res)=>{
    res.send("OK")

})
//Rutas para ....
app.use('/api', router)
//Rutas para el user
app.use('/api', routerUsers)

//Exportación de la instancia app
export default app;