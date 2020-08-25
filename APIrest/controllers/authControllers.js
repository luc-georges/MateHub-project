const jwt = require("jsonwebtoken");
const { testRefreshToken, generateAccessToken } = require('../utils/jwt.utils');

module.exports = {
    refreshToken : async (request, response) => {
        try {
            const refreshToken = request.body.refreshToken;

            if (!refreshToken) {
                return response.status('401').json({error : 'need refreshToken'});
            }
                      
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,async (err, user) => {
                console.log('user:', user)
                if(err) return response.status('403').json({ error: 'invalid refresh token'});
                
                const tokenIsValid = await testRefreshToken(user, refreshToken);
                if (!tokenIsValid) {
                    return response.status('403').json({error: 'refresh token doesnt exist in cache'});
                }
                    const dataUser = { _id : user.id, _nickname : user.nickname};
                    const accesToken = generateAccessToken(dataUser);
                    response.status('201').json({accesToken});
            })

        } catch (error) {
            console.log('error:', error)
            
        }

    }
}