import express from 'express'

const app = express()

app.get('/', (_, response) => {
  return response.json({
    message: 'spaceman bot'
  })
})

app.listen(3333, () => console.log("Server is running"))