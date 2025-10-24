import express from 'express'

let port = 8080
let host = '127.0.0.1'
const app = express()

// Root request -url: 127.0.0.1:8080/

app.get("/",(req,resp)=>{
    return resp.json("Msg : Root-requst")
})


app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`Server Running http://${host}:${port}`)
})