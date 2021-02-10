/*
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
}*/