const express= require('express')
const mysql= require('mysql')
const app=express();
let connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'mean'
});
connection.connect();
app.get('/',function(req,res){
connection.query('select * from emp',function(err,result){
if(err==null)
{
    res.contentType('application/json');
    res.send(JSON.stringify(result));
}else
{
    res.contentType('application/json');
    res.send(JSON.stringify(err));
}
});
});
module.exports=app;