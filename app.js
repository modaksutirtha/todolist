const express = require("express");
// const bodypar= require("body-parser");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));
app.set('view engine', 'ejs');
var items = ["learn skill", "use skill", "earns money"];
var workitems = [];
app.get("/", function (req, res) {

    // res.send("hello we are doing to do list");

    var today = new Date();
    var todaysday = today.getDay();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // var day= "";
    // if(todaysday === 3){
    //     // res.send("its a week day and is wednesday");
    //     day= "weekend";
    // }
    // else{
    //     // res.send("ooh yes no work");
    //     day= "weekday";
    //     // res.write("ooh yes no work");
    //     // res.send();
    // }
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var day = today.toLocaleString("en-US", options);
    console.log(todaysday);
    res.render('list', { listtitle: day, newlistitem: items })
});
app.post("/", function (req, res) {
    console.log(req.body);
     var item = req.body.newitem;
    if (req.body.list === 'Work List') {
        workitems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
   
    

})
app.get("/work", function (req, res) {
    res.render('list', { listtitle: "Work List", newlistitem: workitems });
})
app.post("/work", function (req, res) {
    let item = req.body.newitem;

    
})

app.listen(3000, function () {
    console.log("ooh yes working on 3000");
    // console.log(today);
})