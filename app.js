const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(require('./routes'));
app.use(express.static('public'));


app.listen(port, () =>{
    console.log(`http://localhost:${port}`);
});