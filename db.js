const mysql=require("mysql2");
const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sangeeth7674@",
    database:"chat"
});
conn.connect((err)=>{
    if(err)
    console.log("error to connect");
    else
    console.log("successfully connected to database");
})
module.exports=conn;