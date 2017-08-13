var MongoClient = require('mongodb').MongoClient;
    assert = require('assert');
    express = require('express');
    app = express();
    nunjucks = require('nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/movies', function (req, res) {
    MongoClient.connect('mongodb://localhost:27017/video', function (err, db) {
        assert.equal(null, err);
        console.log('Successfully connects');

        db.collection('movies').find({}).toArray(function (err, docs) {  
                res.render('movies', {'movies': docs});
                db.close();
            });
        });
 });   

app.get('/', function (req, res) {
    res.render('templ', {'name': 'templates'}); 
});


app.use(function (req, res) {
    res.send(404); 
});

app.listen(3000, function (req, res) {
        console.log('server listening on 3000'); 
});