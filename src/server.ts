import { celebrate, errors, Joi, Segments } from 'celebrate'
import express from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'

const app = express()
const port = process.env.PORT || 3333

const httpServer = createServer(app)

app.get('/', (_, response) => {
  return response.json({
    message: 'Simple API',
  })
})

app.get(
  '/validation/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  (request, response) => {
    console.log(request.params)

    return response.json({
      validator: true,
    })
  },
)

const io = new Server(httpServer)

io.on('connection', (socket: Socket) => {
  console.log(socket.id)
})

app.use(errors())

httpServer.listen(port, () => console.log(`Server is running at port ${port}`))
