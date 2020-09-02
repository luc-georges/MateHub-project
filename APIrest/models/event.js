const client = require('./client');
const CoreModel = require('./coreModel');

module.exports = class Event extends CoreModel {

    _user_id;
    _game_id;
    _rank;
    _is_ranked;
    _event_time;
    _duration;
    _player_count;
    _description;
    _status;
    _vocal;
    _player_max;

    static schema = 'user_access.';
    static tablename = 'event';

    constructor(obj) {
        super(obj);
        this.user_id = obj.user_id;
        this.game_id = obj.game_id;
        this.rank = obj.rank;
        this.is_ranked = obj.is_ranked;
        this.event_time = obj.event_time;
        this.duration = obj.duration;
        this.player_count = obj.player_count;
        this.description = obj.description;
        this.status = obj.status;
        this.vocal = obj.vocal;
        this.player_max = obj.player_max;
    }

    /********** STATIC *********/

    /**
     * Fonction qui appel la fonction SQL getalleventdata() renvoie toute les infos des events en dur
     * @static
     * @returns {Array} tout les events
     */
    static async findAllEvent() {
        try {
            
            const result = await client.query(`SELECT * FROM getalleventdata()`);
            return result.rows;

        } catch (error) {
            console.log('error:', error)
            
        }
    }

    /**
     * Fonction qui appel la fonction SQL geteventdata(INT) renvoie toute les infos de l'event en dur
     * @static
     * @param {int} id
     * @returns {Array} l'event
     */
    static async findEventById(id) {
        try {
            
            const result = await client.query(`SELECT * FROM geteventdata($1)`, [id]);
            return result.rows[0];

        } catch (error) {
            console.log('error:', error)
            
        }
    }

    /**
     * Fonction qui appel la fonction SQL getallEventData grace au nickname
     * @static
     * @param {string} nickname
     * @returns {Array} les evenements
     */
    static async getAllEventByNickname(nickname) {
        try {

            const result = await client.query(`SELECT * FROM getalleventdata() WHERE creator = $1`, [nickname]);
            return result.rows;

        } catch (error) {
            console.log('error:', error)
            
        }
    }

    /**
     * Fonction qui appel la fonction SQL getallEventData 
     * @static
     * @param {Object} args
     * @returns {Array} les evenements
     */
    static async getEventByParams(args) {
        try {
            
            let query = `SELECT * FROM getalleventdata()`;
            
            const keys = Object.keys(args);
            
            const values = Object.values(args);
            

            keys.forEach((key,index) => {
                if(index === 0) {
                    query += ` WHERE`
                }
                if(key == "_starting") {
                    values[index] += '%';
                    query += ` ${key}::text LIKE $${index+1}`;
                    
                } else if(key == "_duration" && values[index] == '-2') {
                    values[index] = '2 hours'
                    query += ` ${key} < $${index+1}`

                } else if(key == "_duration" && values[index] == '2-5') {
                    values[index] = '5 hours'
                    query += ` ${key} > interval '2 hours' AND  ${key} < $${index+1}`

                } else if (key == "_duration" && values[index] == '5+'){
                    values[index] = '5 hours'
                    query += ` ${key} > $${index+1}`

                } else if (key == "_rank"){
                    values[index] += '%';
                    query += ` ${key} LIKE $${index+1}`

                } else {
                    query += ` ${key}=$${index+1}`;
                }
                 
  

                if((index+1) !== keys.length) {
                    query += ` AND`;
                }
                
            })
       
            const result = await client.query(query ,values );
            
            return result.rows;

        } catch (error) {
            console.log('error:', error)
            
        }
    }

    /**
     * Fonction pour ajouter une langue a un event
     * @static
     * @param {Object} args
     * @returns {Object} 
     */
    static async addLangOnEvent(val) {
        try {
            
            let query = `INSERT INTO ${this.schema}"M_EVENT_has_LANG" (event_id,lang_id)
            VALUES ($1,$2) RETURNING *;`
            let values = [...val];          

            const result = await client.query(query,values);
            
            return result.rows[0];

        } catch (error) {
            console.log('error:', error)
            
        }
    }

    /**
     * Fonction pour ajouter un user a un event
     * @static
     * @param {Object} args
     * @returns {Object} 
     */
    static async addUserOnEvent(val) {
        try {
            
            let query = `INSERT INTO ${this.schema}"M_USER_has_EVENT" (event_id,user_id,status,message)
            VALUES ($1,$2,$3,$4) RETURNING *;`
            let values = [...val];
            
            const result = await client.query(query,values);
            
            return result.rows[0];

        } catch (error) {
            console.log('error:', error)
            
        }
    }

    /**
     * Fonction pour update le status d'un joueur dans un event
     * @static
     * @param {Object} args
     * @returns {Object} 
     */
    static async updateUserOnEvent(val) {
        try {
            
            let query = `UPDATE ${this.schema}"M_USER_has_EVENT"
            SET status = $1
            WHERE event_id = $2 AND user_id = $3 RETURNING *`;
            let values = [...val];

            const result = await client.query(query,values);
            
            return result.rows[0];

        } catch (error) {
            console.log('error:', error)
            
        }
    }

    /**
     * Fonction pour récuperer un joueur présent dans un event
     * @static
     * @param {Object} args
     * @returns {Object} 
     */
    static async getUserOnEvent(val) {
        try {
            
            let query = `SELECT * FROM ${this.schema}"M_USER_has_EVENT"
            WHERE event_id = $1 AND user_id = $2`
            let values = [...val];

            const result = await client.query(query,values);
        
            return result.rows[0];

        } catch (error) {
            console.log('error:', error)
            
        }
    }

    /**
     * Fonction pour suprimer les row de M_USER_has_Event
     * @static
     * @param {Object} args
     * @returns {Object} 
     */
    static async deleteRowUserHasEvent(id) {
        try {
            
            let query = `DELETE FROM ${this.schema}"M_USER_has_EVENT"
            WHERE event_id = $1`

            const result = await client.query(query, [id]);

            let query1 = `DELETE FROM ${this.schema}"M_EVENT_has_LANG"
            WHERE event_id = $1`

            const result1 = await client.query(query1, [id]);

            return true;
            
        } catch (error) {
            console.log('error:', error)
            
        }
    }

    /*********GETTER **********/

    get user_id() {
        return this._user_id
    }

    get game_id() {
        return this._game_id
    }

    get rank() {
        return this._rank
    }

    get is_ranked() {
        return this._is_ranked
    }

    get event_time() {
        return this._event_time
    }

    get duration() {
        return this._duration
    }

    get player_count() {
        return this._player_count
    }

    get description() {
        return this._description
    }

    get status() {
        return this._status
    }

    get vocal() {
        return this._vocal
    }

    get player_max() {
        return this._player_max
    }

/**********SETTER **************/

    set user_id(value) {
        this._user_id = value
    }

    set game_id(value) {
        this._game_id = value
    }

    set rank(value) {
        this._rank = value
    }

    set is_ranked(value) {
        this._is_ranked = value
    }

    set event_time(value) {
        this._event_time = value
    }

    set duration(value) {
        this._duration = value
    }

    set player_count(value) {

        this._player_count = value
    }

    set description(value) {
        this._description = value
    }

    set status(value) {

        this._status = value
    }

    set vocal(value) {
        this._vocal = value
    }
    
    set player_max(value) {
        this._player_max = value
    }
}
   