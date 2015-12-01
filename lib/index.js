var request = require('request');
var lo = require('lodash');

function SMS(username,password,config){
    if (!username || !password){
        throw 'username & password are required';
    }

    var Config = require('./config.json');

    if (config){
        Config = lo.merge(Config,config);
    }

    this.Config = Config;
    this.username = username;
    this.password = password;
    var encodedPass = new Buffer(username + ':' + password).toString('base64');
    this.headers = {
        post : {
            "Content-Type": "application/json",
            "Authorization" : "Basic " + encodedPass,
            "Accept" : "application/json"
        },
        get : {
            "Authorization" : "Basic " + encodedPass,
            "Accept" : "application/json"
        }
    };


    return this;
}

SMS.prototype.send = function(from,to,message,callback){
    var url = this.Config.apiUrl + this.Config.apiEndPoints.advanced;


    var requestData = {
        messages : [
            {
                from :from,
                text : message.toString('utf8'),
                destinations : []
            }
        ]
    };

    lo.forEach(to,function(recipient){
        requestData.messages[0].destinations.push({to : recipient});
    });

    if (this.Config.notifyUrl){
        requestData.messages[0].notifyUrl = this.Config.notifyUrl;
    }

    if (this.Config.notifyContentType){
        requestData.messages[0].notifyContentType = this.Config.notifyContentType;
    }

    if (this.Config.callbackData){
        requestData.messages[0].callbackData = this.Config.callbackData;
    }

    var sendOptions = {
        url : url,
        method : 'POST',
        headers : this.headers.post,
        body : JSON.stringify(requestData)
    };

    if (this.Config.debug){
        console.log(requestData);
    }

    Post(sendOptions,callback);
};

SMS.prototype.sendMultiple = function(bulkId,messages,callback){
    var _this = this;
    var url = this.Config.apiUrl + this.Config.apiEndPoints.advanced;
    var requestData = {
        bulkId : bulkId,
        messages : []
    };

    lo.forEach(messages,function(message){
        message.text = message.text.toString('utf8');

        if (_this.Config.notifyUrl){
            message.notifyUrl = _this.Config.notifyUrl;
        }

        if (_this.Config.notifyContentType){
            message.notifyContentType = _this.Config.notifyContentType;
        }

        if (_this.Config.callbackData){
            message.callbackData = _this.Config.callbackData;
        }

        lo.forEach(message.to,function(recipient){
            message.destinations.push({to : recipient});
        });

    });

    requestData.messages = messages;

    var sendOptions = {
        url : url,
        method : 'POST',
        headers : this.headers.post,
        body : JSON.stringify(requestData)
    };
    if (this.Config.debug){
        console.log(JSON.stringify(requestData));
    }
    Post(sendOptions,callback);
};

SMS.prototype.getInfo = function(to, callback) {
    if (typeof to === 'string') to = [to];

    var url = this.Config.apiUrl + this.Config.apiEndPoints.query;

    var sendOptions = {
        url : url,
        method : 'POST',
        headers : this.headers.get,
        body : JSON.stringify({to: to})
    };

    if (this.Config.debug){
        console.log(sendOptions);
    }
    Post(sendOptions,callback);
};

SMS.prototype.getReports = function(msgId, callback) {
    if (callback === undefined) {
        callback = msgId;
        msgId = null;
    }

    var url = this.Config.apiUrl + this.Config.apiEndPoints.reports;

    var sendOptions = {
        url : url,
        method : 'GET',
        headers : this.headers.get//,
        //body : JSON.stringify(requestData)
    };

    if (msgId !== null) {
        sendOptions.body = JSON.stringify({messageId: msgId});
    }

    if (this.Config.debug){
        console.log(sendOptions);
    }
    Get(sendOptions,callback);
};

SMS.prototype.getStatus = function(msgId, callback){
    var statusText = this.statusText;
    var debugging = this.Config.debug;
    this.getLogs({messageId: msgId, limit: 1}, function (err, response) {
        if (err) callback(err);
        else {
            var resp = JSON.parse(response).results[0];
            if (debugging){
                console.log(resp);
            }
            var status = require('./status');
            var sts = new status(resp.status);
            console.log(sts);
            callback(null, sts.getMensagem());
        }
    });
};

SMS.prototype.getLogs = function(par, callback){
    if (callback === undefined) {
        callback = par;
        par = null;
    }
    var url = this.Config.apiUrl + this.Config.apiEndPoints.logs;

    var sendOptions = {
        url : url,
        method : 'GET',
        headers : this.headers.get//,
        //body : JSON.stringify(requestData)
    };

    if (par !== null) {
        sendOptions.body = JSON.stringify(par);
    }

    if (this.Config.debug){
        console.log(sendOptions);
    }

    Get(sendOptions,callback);

};

SMS.prototype.getOptions = function(){
    return this.Config;
};

SMS.prototype.setOption = function(option,value){
    this.Config[option] = value;
    return this;};

function Post(sendOptions,callback){
    request.post(sendOptions, function(err, res, body){
        if (err) {
            return callback(err);
        }

        return callback(null, body);
    });
}

function Get(sendOptions,callback){
    request.get(sendOptions, function(err, res, body){
        if (err) {
            return callback(err);
        }

        return callback(null, body);
    });
}

module.exports = SMS;