'use strict'

const TestMessage = require('./testmessage_pb')
const WebSocket = require('ws')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const ws = new WebSocket('wss://localhost:7070/', {
 origin: 'https://localhost:7070'
})

ws.on('open', function open() {
 console.log('connected')
})

ws.on('close', function close() {
 console.log('disconnected')
})

ws.on('message', function incoming(data, flags) {
 console.log('message')
 var bytes = Array.prototype.slice.call(data, 0)
 var message = proto.TestMessage.deserializeBinary(bytes)
 console.log(message.getSometext())
 ws.close()
})