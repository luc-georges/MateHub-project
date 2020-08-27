const client = require('./client');
const CoreModel = require('./coreModel');

module.exports = class Event extends CoreModel {

    _user_id;
    _game_id;
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
            //console.log('keys:', keys)
            const values = Object.values(args);
            //console.log('values:', values)

            keys.forEach((key,index) => {
                if(index === 0) {
                    query += ` WHERE`
                }

                query += ` ${key}=$${index+1}`;

                if((index+1) !== keys.length) {
                    query += ` AND`;
                }

            })

            console.log(query);
            const result = await client.query(query,values);
            return result.rows;

        } catch (error) {
            console.log('error:', error)
            
        }
    }

    static async addUserOnEvent(val) {
        try {
            
            let query = `INSERT INTO ${this.schema}"M_USER_has_EVENT" (event_id,user_id,status,message)
            VALUES ($1,$2,$3,$4) RETURNING *;`
            let values = [...val];
            

            const result = await client.query(query,values);
            //console.log('result:', result.rows[0]);
            return result.rows[0];

        } catch (error) {
            console.log('error:', error)
            
        }
    }

    static async updateUserOnEvent(val) {
        try {
            
            let query = `UPDATE ${this.schema}"M_USER_has_EVENT"
            SET status = $1
            WHERE event_id = $2 AND user_id = $3 RETURNING *`;
            let values = [...val];

            const result = await client.query(query,values);
            //console.log('result:', result.rows[0]);
            return result.rows[0];

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