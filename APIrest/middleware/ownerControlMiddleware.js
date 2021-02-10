
module.exports = {
    ownerControl : (request, response, next) => {

        if (request.user.id != request.params.id) {
            return response.status('403').json({error: 'access denied'});
        }

        next();
    }
}