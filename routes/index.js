/*
 * GET home page.
 */

exports.index = function(req, res) {
    res.render('index', {
        title: 'Express',
        token: req.params.token
    });
};

exports.register = function(req, res) {
    var mongo = require('../mongo').initMongo();
    var mongoose = require('mongoose');
    var deviceInfo = mongoose.model('device', mongo.deviceInfo);
    var response;
    if(req.params.token){
        var device = new deviceInfo({
            token: req.params.token,
            system: 'iphone',
            data: 'no extra data',
            badge: 0
        });
        device.save();
        response = device;
    } else{
        response = {"error" : "No token provided"};
    }
    res.send(JSON.stringify(response));
};

exports.findAll = function(req, res){
    var mongo = require('../mongo').initMongo();
    var mongoose = require('mongoose');
    var deviceInfo =  mongoose.model('device', mongo.deviceInfo);
    deviceInfo.find({}, function(error, doc){
        res.render('list', {title: 'Find All', devices: doc});
    });
}