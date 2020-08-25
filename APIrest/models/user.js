const client = require('./client');
const CoreModel = require('./coreModel');


module.exports = class User extends CoreModel {
    
    _email;
    _password;
    _nickname;
    _dateofbirth;
    _description;
    _avatar;
    _banner;

    static schema = 'user_access.'
    static tablename = 'user';

    constructor(obj) {
        super(obj);
        this.email = obj.email;
        this.password = obj.password;
        this.nickname = obj.nickname;
        this.dateofbirth = obj.dateofbirth;
        this.description = obj.description;
        this.avatar = obj.avatar;
        this.banner = obj.banner;

    }
    /***** STATIC  **********/


    /**
     * Fonction qui appel la vue SQL getTopusers
     * @static
     * @returns {Array} l'event
     */
    static async findTopPlayer() {
        try {
            
            const result = await client.query(`SELECT * FROM getTopusers FETCH FIRST 10 ROWS ONLY`);
            return result.rows;
        } catch (error) {
            console.log('error:', error)
            
        }
    }


    
    /**** GETTER ************/

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get nickname() {
        return this._nickname
    }

    get dateofbirth() {
        return this._dateofbirth
    }

    get description() {
        return this._description
    }

    get avatar() {
        return this._avatar
    }

    get banner() {
        return this._banner
    }

     /**** SETTER ************/

    set email(value) {

        this._email = value
    }

    set password(value) {
        this._password = value
    }

    set nickname(value) {

        this._nickname = value
    }

    set dateofbirth(value) {
        this._dateofbirth = value
    }

    set description(value) {
        this._description = value
    }

    set avatar(value) {
        this._avatar = value
    }

    set banner(value) {
        this._banner = value
    }

}