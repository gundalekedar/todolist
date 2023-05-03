const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname +"/date.js")

const app = express();

var items= ["Buy Food" ,"Cook Food", "Eat Food"];
var WorkItems =[];

app.set("view engine","ejs");

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",function(req,res){
    
let day = date.getDate();

res.render("list",{listTitle:day ,Newlistitems:items});

});




app.post("/",function(req,res){
    // console.log(req.body);
    let item = req.body.newItem;

    if(req.body.list ==="worklist"){
        WorkItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
    
});


// for work list 
app.get("/work",function(req,res){
res.render("list",{listTitle:"worklist" , Newlistitems:WorkItems});
})

app.get("/about",function(req,res){
 res.render("about");
})


app.listen(3000,function(){
    console.log("server is running on 3000 port");
})