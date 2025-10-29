import chalk from 'chalk'
import express from 'express'
import morgan from 'morgan'
import empRouter from './routes/empRouter.js'
const app = express()


let port = 8080
let host = '127.0.0.1'
// morgan - HTTP 
app.use(morgan("dev"))


app.get("/",(req,resp)=>{
    return resp.status(200).json({"msg":"Application root requst"})
})


app.use("/emp",empRouter)


app.listen(port, host, (err)=>{
    if(err) throw err
    console.log(chalk.red(`server running http://${host}:${port}`));
    
})