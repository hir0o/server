var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.json({
        message: "hello ts"
    });
});
app.listen(3000);