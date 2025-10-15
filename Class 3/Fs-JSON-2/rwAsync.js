

import fs from 'fs'

// fs.readFile("filename","encoding format",callback()=>{})


fs.readFile("employees.json", "utf-8",(err,data)=>{
    if(err) throw err
    let employees = JSON.parse(data)
    let Female_employees = employees.filter((emp)=>{
        return emp.gender === "Female"
    })
    fs.writeFile("Female.json", JSON.stringify(Female_employees), (err)=>{
        if(err) throw err
        console.log("New file Created successfuly")
        console.log(Female_employees.length)
    })

})