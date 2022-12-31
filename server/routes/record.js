const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

// Get list of all schools for homepage
recordRoutes.route("/schoolList").get(function (req, res) {
    let db_connect = dbo.getDb("myFirstDatabase");
    db_connect
        .collection("schools")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result)
        });
});

// Get school info from school MongoDB ID
recordRoutes.route("/school/:id").get(function (req, res) {
    console.log(req.params);
    let db_connect = dbo.getDb();
    let myquery = {_id: ObjectId(req.params.id)};
    db_connect
        .collection("schools")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Get school info from schoolId
recordRoutes.route("/neighborSchool/:id").get(function(req, res) {
    console.log(req.params.id);
    let db_connect = dbo.getDb();
    let myquery = {"schoolId": parseInt(req.params.id)};
    db_connect
        .collection("schools")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Update when a contact has been emailed
recordRoutes.route("/emailed/:schoolId/:contactId").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = {_id: ObjectId(req.params.schoolId), "contacts.id": parseInt(req.params.contactId)}
    let newvalues = {$set: {"contacts.$.emailed": true}};
    db_connect
        .collection("schools")
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");;
            response.json(res)
        });
});


module.exports = recordRoutes;