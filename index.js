import express from 'express'
import mongoose from 'mongoose'

const app = express()

mongoose.connect('mongodb://root:root@mongoDB:27017/animales?authSource=admin');

const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

app.get('/', async (_req, res) => {
  console.log('listando chanchitos...')
  const animales = await Animal.find()
  return res.send(animales)
})

app.get('/crear', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Chanchito', estado: 'Feliz' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))