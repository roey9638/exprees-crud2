const express = require("express")

const app = express();

//Setting
app.get('/', (req,res) => {
    res.sendFile(__dirname + '\\index.html');
});

//Activateing
app.listen(3000, () => {
    console.log('server listening on port 3000');
});