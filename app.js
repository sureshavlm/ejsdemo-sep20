const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));// all my html views resides in views folder
app.set('view engine', 'ejs'); // rendering content using ejs view engine

const port = process.env.PORT || 8080;

app.listen(port, function(req, res) {
    console.log('Server listening on port %s', port);
});

app.get('/products', function(req, res) {
    res.render('products', {
        title: "Products View", 
        items: ["iPhone10", "iMac", "Macbook Prod", "iPad"]
    });
});

app.get('/carts', function(req, res) {
    res.render('cartspage', {
        
    });
}); 


