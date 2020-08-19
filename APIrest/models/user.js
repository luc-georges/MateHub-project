const client = require('./client');
const CoreModel = require('./coreModel');
const validator = require('validator');


module.exports = class User extends CoreModel {
    
    _email;
    _password;
    _nickname;
    _DOB;
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
        this.DOB = obj.DOB;
        this.description = obj.description;
        this.avatar = obj.avatar;
        this.banner = obj.banner;

    }
    /***** STATIC  **********/

    
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

    get DOB() {
        return this._DOB
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

    set DOB(value) {
        this._DOB = value
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