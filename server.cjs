const express = require('express')
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.json())

app.get('/',function(request,response){
    const data = {
        "content" : "home page",
        "text" : "Welcome"
    }
    response.json(data)
})


// app.get('/login',function(request,response){
//      const data ={
//         "content" : "about login",
//         "text" : "login received"
//      }
    
//     response.status(200).json(data)
// })

app.post('/login',function(request,response){
    if(request.body.username === 'jayasri' && request.body.password === '1234'){
        response.json({
            "status" : "Vaild user"
        })
    } else {
        response.json({
            "status" : "InVaild user"
        })
    }   // console.log(request.body.password)
    // response.json({
    //   "status" : "login request received"
    // })
  })

// })
// app.get('/python',function(request,response){
//     response.send('welcome to python')
// })

app.post('/create-user',function(request,response){
    console.log(request.body)
    response.status(201).json({
        "status" : "new user created"
    })
})
const port = 8000
app.listen(port,function(){
    console.log(`Listening on port ${port}...`)
}) 

/**
 * status code
 * 200 - ok
 * 201 - created
 * 401 - unauthorized
 * 404 - page not found
 * 500 - internal server error
 */