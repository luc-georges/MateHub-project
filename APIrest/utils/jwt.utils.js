const jwt = require('jsonwebtoken');

module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            userId: userData._id,
            userNickname: userData._nickname
        },
        process.env.JWT_SIGN_SECRET,
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
                let jwtToken = jwt.verify(token, process.env.JWT_SIGN_SECRET);
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
    }
};