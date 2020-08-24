const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '57f681d2e3c911ea87d00242ac130003fzcg58hju2111yhgty659ssf55';

module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            userId: userData.id,
            userNickname: userData.nickname
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '4h'
        })
    },
    parseAuthorization: (authorization) => {
        return (authorization != null) ? authorization.replace('Bearer ', '') : null;
    },
    getUserId: function (authorization) {
        let userId = -1;
        let token = this.parseAuthorization(authorization);
        if(token !== null) {
            try{
                let jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                if(jwtToken !== null) {
                    userId = jwtToken.userID
                }
            } catch (error) {
            console.log('error:', error)

            }
        }
        return userId;
    }
};