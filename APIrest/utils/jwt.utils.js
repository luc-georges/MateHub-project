const jwt = require('jsonwebtoken');
const redis = require('../redis/client');

const REDIS_PREFIX = "auth_refresh_tokens";

module.exports = {
    generateAccessToken: function(userData) {
        const user = {
            id : userData._id,
            nickname: userData._nickname
        };

        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '25s' })
    },

    generateRefreshToken: async function(userData) {
        const user = {
            id : userData._id,
            nickname: userData._nickname
        };

        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
        await this.saveRefreshToken(userData, refreshToken);

        return refreshToken;
    },

    saveRefreshToken: function (userData, token) {
        return new Promise((resolve, reject) => {
            redis.hmset(REDIS_PREFIX, userData.id, token, (err,result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

    testRefreshToken: function (userData, token) {
        return new Promise((resolve, reject) => {
            redis.hget(REDIS_PREFIX, userData.id, (err,result) => {
                if (err) return reject(err);
                resolve(result === token);
            });
        });
    }
    /*
    parseAuthorization: (authorization) => {
        return (authorization != null) ? authorization.replace('Bearer ', '') : null;
    },*/
    /*
    getUserId: function (authorization) {
        let userId = -1;
        let token = this.parseAuthorization(authorization);
        if(token !== null) {
            try{
                let jwtToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
                if(jwtToken !== null) {
                    
                    userId = jwtToken.userId;
                }
            } catch (error) {
            console.log('error:', error)

            }
        }
        return userId;
    },
    getUserNickname: function (authorization) {
        let userNickname;
        let token = this.parseAuthorization(authorization);
        if(token !== null) {
            try{
                let jwtToken = jwt.verify(token, process.env.JWT_SIGN_SECRET);
                if(jwtToken !== null) {

                    userNickname = jwtToken.userNickname;
                }
            } catch (error) {
                console.log('error:', error)

            }
        }
        return userNickname;
    }*/
};