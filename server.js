// Dependencies
var express = require("express");
var path = require("path");

//Express App
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Heroku PORT
var PORT = process.env.PORT || 3001;

//Table Info

var tableInfo = [
    {
        customerName: "Bob",
        phoneNumber: "555-555-5555",
        customerEmail: "null@null.com",
        customerID: "123456"

    }
];

const waitInfo = [
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

app.get("/tables", function(req,res) {
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/reserve", function (req,res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
});

// Display Tables
app.get("/api/tables", function(req, res) {
    return res.json(tableInfo);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitInfo);
});


//Posting new Table

app.post("/api/tables", function(req, res) {
    var newTable = req.body;

    console.log(newTable);

    if ( tableInfo.length <= 4){
    tableInfo.push(newTable);
        res.send(true);
    }
    else {
        waitInfo.push(newTable);
        res.send(false);
    };


});

//Clearing Data

app.post("/api/clear", function (req, res) {

    waitInfo.length = 0;
    tableInfo.length = 0;
    res.send("Success");
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });