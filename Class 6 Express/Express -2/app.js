
import express from 'express'
let app = express();
let port = 8080;
let host = '127.0.0.1'

//Root Request: API URL : 127.0.0.1:8080/

app.get ("/api/create",(req,resp)=>{
    return resp.json({"msg":"Create Request"})
})

app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server Runnning on http://${host}:${port}/`)
})