var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/videos';

MongoClient.connect(url, function(err, db) {

    // assert.equal(null, err);
    console.log("Successfully connected to server");

    // Find some documents in our collection
    db.collection('movies').find({}).toArray(function(err, docs) {

        // Print the documents returned
        docs.forEach(function(doc) {
            console.log(doc.title);
        });

        // Close the DB
        db.close();
    });

    // Declare success
    console.log("Called find()");
});


