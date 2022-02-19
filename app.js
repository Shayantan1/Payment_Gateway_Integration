const express = require("express");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.json());

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/donation", function(req, res){
    res.render("donation");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(req, res){
    console.log("server has started successfully.");
});
