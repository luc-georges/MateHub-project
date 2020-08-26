const jwt = require('jsonwebtoken');
const redis = require('../redis/client');

const REDIS_PREFIX = "auth_refresh_tokens";

module.exports = {
    generateAccessToken: function(userData) {
        const user = {
            id : userData._id,
            nickname: userData._nickname
        };

        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '59s' })
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
    },

    deleteRefreshToken: function (token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) return reject(err)

                redis.hdel(REDIS_PREFIX, user.id, (err, result) => {
                    if (err) return reject(err);
                    resolve(result);
                })
            })
        })
    }

};