import express from 'express'

const app = express()

app.get('/', (_, response) => {
  return response.json({
    message: 'spaceman bot is running',
  })
})

app.listen(3333, () => console.log('Server is running'))
