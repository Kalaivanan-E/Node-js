
import express from 'express'
import fs from 'fs'
import path from 'path'

let router = express.Router()

router.get("/read",async(req,resp)=>{
    console.log("today is tuesday")
    let employees = await getEmployee()
    return resp.status(200).json(employees)
})

let getEmployee = ()=>{
    let emp_file = path.join(process.cwd(),"data","employees.json")
    let emp_Data = fs.readFileSync(emp_file,'utf-8')
    return JSON.parse(emp_Data)
}
export default router