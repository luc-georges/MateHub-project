const axios = require('axios');
const client = require('../../models/client');



module.exports = {
    getLolId: async (request, response) =>{
        try{
            let user_region = `${request.params.region}`
            const pseudo = `${request.params.summoner_name}`
            const result = await axios({
                method: 'get',
                url: `https://${user_region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${pseudo}`,
                headers: {
                    'Content-Type': 'application/json',
                    "X-Riot-Token": process.env.Token,
                }})             
                if (!result) {
                    response.status('404').json({error:'user not found'})
                    //next()
                }


        response.status('200').json({data: result.data, tagline: user_region });
        }catch(error){
            console.log('error:', error);
            response.status('500').json({error:'Internal Server Error'});
        }
    },
    getLolStats: async (request, response) =>{
        try{
            let user_region = request.params.region;

            const sum_id = `${request.params.sum_id}`
            const result = await axios({
                method: 'get',
                url: `https://${user_region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${sum_id}`,
                headers: {
                    'Content-Type': 'application/json',
                    "X-Riot-Token": process.env.Token,
                }})             
                if (!result) {
                    response.status('404').json({error:'user not found'})
                    //next()
                }


        response.status('200').json(result.data[0]);
        }catch(error){
            console.log('error:', error);
            response.status('500').json({error:'Internal Server Error'});
        }
    },
    InsertSummoner: async (request, response) =>{
        try{
            const userID = request.params.userId
            const gameID = request.params.gameId
    
            const result = await client.query(`INSERT INTO user_access."M_USER_has_GAME" ("user_id", "game_id", "IGN","stats") VALUES($1,$2,$3,$4)  RETURNING ID `,
                            [userID,gameID,request.body.IGN,request.body.stats])

                            response.status('200').json({data:result.data});

        }catch(error){
            console.log(error)
        }
    }
}