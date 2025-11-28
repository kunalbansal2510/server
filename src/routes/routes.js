import express from 'express'
import {a} from '../controller/user_cotroller.js'
const routes = express.Router()

routes.get('/test',a)

export default routes