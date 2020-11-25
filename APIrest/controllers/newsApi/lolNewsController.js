const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a67ac7faaf004f3fba5a95dc04d81e6a');

module.exports = {

    getLolNews: async (request, response) => {
        try {
            const result = await newsapi.v2.everything({
                q: '"League of Legend"',
                language: 'en'
              })

            if (!result) {
                response.status('404').json({error:'user not found'})
                //next()
            }

            response.status('200').json({data: result});

        } catch (error) {
            console.log('error:', error);
            response.status('500').json({error:'Internal Server Error'});
        }
    }
}