const express = require('express')
const WebSocket = require('ws')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')
const { body, validationResult } = require('express-validator')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    database: 'pi_medsos',
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql'
})

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../public')))

const hostName = '127.0.0.1'
const port = 3000

const server = http.createServer(app)
const wss = new WebSocket.Server({ server })
const clients = new Set()

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
  

app.get('/', async (req, res) => {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
    res.send({
        message: 'Home page'
    })
})

app.get('/student', (req, res) => {
    res.send({
        message: 'Student page'
    })
})

app.post('/student', (req, res)  => {
    res.send({
        message: 'Student Created',
    })
})

app.delete('/student/:id', (req, res) => {
    res.send({
        message: 'Student deleted',
    })
})

app.get('/student/:id', (req, res) => {
    return res.send({
        message: 'Student detail',
    })
})

app.put('/student/:id', (req, res) => {
    res.send({
        message: 'Student updated',
    })
})

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