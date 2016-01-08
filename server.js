var express = require("express");
var moment = require("moment");
var app = express();

app.use(express.static("public"));

app.get("/:date", function(req, res){
    var date = isNaN(req.params.date) ? moment(req.params.date) : moment(Number(req.params.date), "X");
    if(date.isValid()){
        res.json({natural: date.format("MMMM D, YYYY"), unix: date.format("X")});
    } else {
        res.json({natural: null, unix: null});
    }
    res.end();
});

app.listen(8080, function(){console.log("App listening on port 8080.")});
