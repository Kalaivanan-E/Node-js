// creating a server using express

import express from 'express'

let app = express()

app.get("/",(req,resp)=>{
    return resp.json({"msg":"Root Request"})
})

app.listen(8016,'127.0.0.1',(err)=>{
    if (err) throw err
    console.log("Server is Running")
})