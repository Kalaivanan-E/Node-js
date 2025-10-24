
import http from 'http'
import fs from 'fs'
import path from 'path'

const server = http.createServer((req,resp)=>{
    if(req.url==='/' || req.url ==='/index'){
        fs.readFile(path.join(process.cwd(),"index.html"),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    if(req.url ==='/about'){
        fs.readFile(path.join(process.cwd(),"about.html"),"utf-8",(err,data)=>{
            if (err) throw err
            resp.end(data)
        })
    }
    server.listen(1212,"127.0.0.1",(err)=>{
        if(err) throw err
        console.log('Server is Running ')
    })
})