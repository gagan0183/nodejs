var MongoClient = require('mongodb').MongoClient;
    assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/video', function (err, db) {
    assert.equal(null, err);
    console.log('Successfully connects');

db.collection('movies').find({}).toArray(function (err, docs) {  
        docs.forEach(function (doc) {
            console.log(doc.title);
        });

        db.close();
    });
});