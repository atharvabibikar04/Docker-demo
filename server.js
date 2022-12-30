const express =require("express");
const app=express();
app.get('/',function(req,resp){
    resp.send("Hello World");
});

app.listen(8000,function(){
console.log("Server is running on port 8000");
});

// app.listen(8000);
// console.log("Server is running on port 8000");