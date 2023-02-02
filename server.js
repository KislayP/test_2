var express=require('express');
var app = express();

app.get('/',(req,res)=>{
    res.send("Hi I created server using express")
});

app.listen(3000,()=>{
    console.log("server runnig in port 8080. visit:http://localhost:8080")
})