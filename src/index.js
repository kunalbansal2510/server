import express from 'express'
import route from './routes/routes.js'
const app = express()

const PORT = 5050

const a = (req, res) => { res.send({ name: "fdsfs", age: 44 }) }

app.use('/', route)


app.listen(PORT, () => console.log('Server is Running Port = ', PORT))