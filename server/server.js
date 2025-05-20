const express = require('express')
const WebSocket = require('ws')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')
const { body } = require('express-validator')
const { Sequelize } = require('sequelize')
const cors = require('cors')


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../public')))

const hostName = '127.0.0.1'
const port = 3000

const server = http.createServer(app)
const wss = new WebSocket.Server({ server })
const clients = new Set()
const AuthRoutes = require('./routes/authRoutes.js')
const StudentRoutes = require('./routes/studentRoutes.js')
const MajorRoutes = require('./routes/majorRoutes.js')
const PostingRoutes = require('./routes/postingRoutes.js')

const corsOptions = {
    origin: "http://localhost:5173"
}

wss.on('connection', (ws) => {
    console.log('A new client connected.')
    clients.add(ws)

    ws.on('message', (message) => {
      console.log('Received message:', message.toString())
  
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message.toString())
        }
      })
    })
})

wss.on('close', () => {
    console.log('A client disconnected.')
    clients.delete(ws)
})

app.use('/v1/auth', cors(corsOptions), AuthRoutes(express))
app.use('/v1/student', cors(corsOptions), StudentRoutes(express))
app.use('/v1', cors(corsOptions), MajorRoutes(express))
app.use('/v1/post', cors(corsOptions), PostingRoutes(express))

// app.post('/student', StudentController.createStudent)
// app.get('/student', StudentController.getAllStudents)
// app.get('/student/:id', StudentController.getStudentById)
// app.delete('/student/:id', StudentController.deleteStudent)
// app.put('/student/:id', StudentController.updateStudent)


app.post('/send-notification', (req, res) => {
    const notification = req.body;
    
    clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
                type: 'notification',
                data: notification
            }))
        }
    })
    
    res.status(200).json({ message: 'Notifikasi berhasil dikirim' })
})

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}`)
})

// app.use('/', () => {
//     routes.get('/student', (req, res) => {
//         res.status(200).json({
//             message: 'Hello world!'
//         })
//     })
// })


// const { createServer } = require('http')
 
// const hostName = '127.0.0.1'
// const port = 3000

// const server = createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plan')
//     res.end('Hello world!')  
// })

// server.listen(port, hostName, () => {
//     console.log(`Server running at http://${hostName}:${port}`)
// })