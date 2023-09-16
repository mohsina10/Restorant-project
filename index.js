const express=require("express");  
const bodyParser=require("body-parser");
const app= express();  
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
    res.send("welcome my name is mohsina")
}); 
app.get("/aboutus", function(req,res){ 
    
    res.sendFile(__dirname+"/public/aboutus.html");
}); 
app.post("/aboutus", function(req,res){ 
    
    res.sendFile(__dirname+"/public/about.html"); 
    console.log(req.body);
}); 
app.listen(3000 , function(req,res){
    console.log("server is running")
});