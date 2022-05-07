const express = require('express');
const app = express();
const port = 3000;

app.use("/static",express.static('./static/'));

app.get('/', function(req, res){
   res.sendFile(__dirname+"/index.html");
})

app.listen(port, function () {
   console.log("Server is running on localhost"+port);
});
