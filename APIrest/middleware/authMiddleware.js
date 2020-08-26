const jwt = require('jsonwebtoken');

module.exports = {
    authenticateToken: (request, response, next) => {
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return response.status('401').json({error: 'need token'})
        };

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return response.status('403').json({ error: 'invalid token'});
            request.user = user;
            next()
        })
    }
}