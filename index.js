import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

var username = "";
var password = "";

var details = {};

details["test"] = "test";
details["abhinav_2462"] = "Abhinav@03";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/submit",(req,res)=>{
    username = req.body.username;
    password = req.body.password;
    console.log(username,password);
    // if(username == "abhinav_2462" && password == "Abhinav@03"){
    if(details[username]==password){
        res.render("index.ejs");
    }
    else{
        res.render("index.ejs",{
            wrong: "wrong"
        })
    }
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});

