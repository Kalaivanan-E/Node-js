
import express from 'express'
import fs from 'fs'
import path from 'path'

let router = express.Router()
/*
create
-------
usage: Create new employee
Rest API URL:http://127.0.0.1:8080/emp/create
Method Type:POST
Required Fields: eid,ename,esal,loc
Access Type:Public
*/
router.post("/create",async (req,resp)=>{
    console.log("Inside POST Method")
    let emp=req.body;
    console.log(emp)
    let employees=await getEmployees();
    console.log(employees.length)
    let employee = employees.find((employee)=>{
        return employee.eid === emp.eid;
    })
    console.log(employee)
    if(employee){
        return resp.status(404).json({"msg":"Buddy! Employee Already Exists"})
    }
})
export default router