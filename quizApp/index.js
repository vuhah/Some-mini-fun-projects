const express = require('express');
const app = express();
const port = 3000;
// You can specify which plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';
app.use("/static",express.static('./static/'));

app.get('/', function(req, res){
   res.sendFile(__dirname+"/index.html");
})

app.listen(port, function () {
   console.log("Server is running on localhost"+port);
});
