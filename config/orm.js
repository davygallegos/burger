var connection = require("./connection");


orm = {
    selectAll: function (whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
}
