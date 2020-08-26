
module.exports = (error, _, response,__) => {
    response.status('500').json({error:'Internal Server Error'});
};