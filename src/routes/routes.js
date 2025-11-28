import express from 'express'
import { create_user } from '../controller/user_cotroller.js'
const routes = express.Router()

routes.get('/api/user_create', create_user)

export default routes