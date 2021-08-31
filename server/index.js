const express = require('express')
const cors = require('cors')
const ctrl = require('./controller/ctrl')
const app = express()

app.use(express.json())
app.use(cors())

//endpoints
app.get(`/api/houses`, ctrl.getAllHouses);
app.post(`/api/houses`,ctrl.createHouse);
app.delete(`/api/houses/:id`, ctrl.deleteHouse);
app.put(`/api/houses/:id`, ctrl.updateHouse)
app.listen(4004, ()=> console.log('port up and running'))