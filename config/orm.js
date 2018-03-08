// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        var query = "SELECT ALL FROM * " + table + ";";
        connection.query(query, function(err, result){
            if (err) { throw err; }
            cb(result)
        });
    },
    insertOne: function (cb) {

    },
    updateOne: function (cb) {

    }
}
