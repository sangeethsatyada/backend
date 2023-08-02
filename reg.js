const conn=require("./db");
const express=require("express");
const app=express();
const fs=require("fs");
const body=require("body-parser");
const data=fs.readFileSync("reg.html");
app.use(express.urlencoded());
app.get("/",(req,res)=>{
    res.end(data);
})
app.post("/register",(req,res)=>{
   let namef=req.body.name;
   let passf=req.body.pass;
   let phonef=req.body.phone;
   let sql=`INSERT INTO register(name,password,phone) VALUES ("${namef}","${passf}","${phonef}")`;
   conn.query(sql,(err,res)=>{
       if(err)
       throw err;
       else
       console.log("success to insert");
   })
})
app.listen(8089);
console.log("server running at http://127.0.0.1:8089");