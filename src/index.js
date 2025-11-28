import express from 'express'
import route from './routes/routes.js'
const app = express()

const PORT = 5050

app.use(express.json())

app.use('/', route)


app.listen(PORT, () => console.log('Server is Running Port = ', PORT))