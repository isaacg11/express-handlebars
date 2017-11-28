const express = require('express');
const app = express();
const handlebars = require("express-handlebars").create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', (request, response) => {
    response.render('home');
});

app.get('/about', (request, response) => {
    response.render('about');
});

app.use((request, response) => {
    response.status(404);
    response.render('404');
});

app.listen(3000, () => {
    console.log('server running')
})