const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(1337, () => console.log('Example app listening on port 1337!'));