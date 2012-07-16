function initMongo(){
    var mongoose = require('mongoose');
    var mongoObject = {};

    var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

    mongoObject.deviceInfo = new Schema({
        token: String,
        system: String,
        badge: Number,
        data: String
    });

    return mongoObject;
}

exports.initMongo = initMongo;