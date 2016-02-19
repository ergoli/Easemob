var exec = require('cordova/exec');

exports.init = function(arg0, success, error) {
    exec(success, error, "Easemob", "init", [arg0]);
};

exports.login = function(userName, password, success, error) {
    exec(success, error, "Easemob", "login", [userName, password]);
};

exports.chat = function(arg0, success, error) {
    exec(success, error, "Easemob", "chat", [arg0]);
};
