// gör så man kan använda express i server.js
const express = require('express');
const app = express();
const port = 1234;
const cors = require('cors');

app.use(cors({
    origin: '*'
}));
app.use(express.static('public'));

app.listen(port, () => {
    console.log('Listening to port ' + port)
});