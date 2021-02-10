const redis = require('../redis/client');

const REDIS_PREFIX = "auth_security_string";

module.exports = {

    generateSecurityString: async function() {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < 6; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        //await this.saveSecurityString(userNickname, result);

        return result;
    },

    saveSecurityString: function (userNickname ,securityString) {
        return new Promise((resolve, reject) => {
            redis.hmset(REDIS_PREFIX , userNickname, securityString, (err,result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

    testsecurityString: function (userNickname,securityString) {
        return new Promise((resolve, reject) => {
            redis.hget(REDIS_PREFIX , userNickname, (err,result) => {
                if (err) return reject(err);
                resolve(result === securityString);
            });
        });
    },

    deletesecurityString: function (userNickname ) {
        return new Promise((resolve, reject) => {
            redis.hdel(REDIS_PREFIX , userNickname, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
        })
    }
}

//let res = module.exports.generateSecurityString();
//console.log(res);