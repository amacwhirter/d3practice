var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static("./public"));

app.get("/map", function (req, res) {
    res.sendFile(path.join(__dirname+'/map.html'));
});

app.get("/force", function (req, res) {
    res.sendFile(path.join(__dirname+'/force.html'));
});

app.listen(port, function(err) {

    if (!err)
        console.log("Good to go");
    else console.log(err)

});
