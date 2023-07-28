const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const PORT = 4000
const productRouter = require('./routes/product.router')

mongoose.connect('')
.then(()=>{
    console.log('db connect')
})
.catch((err)=>{
    console.log(err)
})
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/products',productRouter)

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(PORT,()=>{
    console.log('listen')
})