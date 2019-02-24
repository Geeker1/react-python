const express = require('express')


const path = require('path')

const port = process.env.PORT || 3000

const app = express()

app.use(express.static(path.join(__dirname,'build')))

console.log(__dirname)
console.log(express.static(__dirname))


app.get('/*',(req,res)=>{
	res.sendFile(path.resolve(__dirname, 'build','index.html'))
})

app.listen(port)

console.log('Server started')
console.log(port)