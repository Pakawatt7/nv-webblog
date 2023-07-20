let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend: true}))

app.get('/status', function (req, res) {
    res.send('Hello nodejs server')
})

app.get('/hello/:person', function (req, res) {
    console.log('hello -' + req.params.person)
    res.send('say hello with ' + req.params.person)
})

 //get delete user
 app.delete('/user/:userid', function(req, res){
    res.send('ลบข้อมูลผู้ใช้')
})

 //get user by id
app.get('/user/:userid', function (req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน')
})

 //get all user
app.get('/users', function (req, res) {
    res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
})
 

let port = 8081
app.listen(port, function () {
    console.log('server running on ' + port)
})