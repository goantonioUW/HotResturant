// Dependencies
var express = require("express");
var path = require("path");

//Express App
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Table Info

var tableInfo = [
    {
        customerName: "Bob",
        phoneNumber: "555-555-5555",
        customerEmail: "null@null.com",
        customerID: "123456"
        
    }
];

//Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/tables", function(req,res) {
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/api/reserve", function (req,res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
});