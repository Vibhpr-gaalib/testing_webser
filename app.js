const express = require("express");
const chalk = require("chalk");
const path = require("path");
const app = express();
const hbs = require("hbs");

const api = require("./api");

const newpath = path.join(__dirname , "/client_js")
console.log(newpath);
const pathname = path.join(__dirname , "/public");
console.log(pathname);
app.use(express.static(pathname));


const partialpath = path.join(__dirname , "/template/partials");
console.log(partialpath);

hbs.registerPartials(partialpath);

app.set("view engine" , "ejs");
app.get('/', function(req,res){
   
    res.render('home.hbs' , {value:0});
});
const obb = {
    node : "hello ",
    data : 29,
    va : 40
}
 
app.get("/about/:hey",(req,res)=>{
    
    res.render('hey', {value : obb})
});

app.get("/weather", (req,res)=>{
    if(!req.query.search){
         return res.send({
             error : "there is a error inside "
         });
    }
    else{
      res.send({
            forcast :"tujo pta huni chahindi bawa",
            address : req.query.search,
            data : "current value" + " " +api.apirequest("bilaspur")
        })
    }
    console.log( req.query);
console.log("data");
});

// app.get("*" , function(req,res){
//       res.status(404).send("budddy sorry bt i can't findoutyour stuff");
// });



app.listen(3000,()=>{
    console.log(chalk.blue.inverse.italic("server has started"));
})