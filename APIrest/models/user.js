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
        if (! validator.isEmail(value)) {
            throw Error('User.email must be an eMail')
        }
        this._email = value
    }

    set password(value) {
        this._password = value
    }

    set nickname(value) {
        if (typeof value !== 'string') {
            throw Error('User.nickname must be a string!');
        }
        if (!validator.isLength(value,{min:1, max:30})) {
            throw Error('User.description must have 30 characters max!');
        }
        this._nickname = value
    }

    set DOB(value) {
        if (! validator.isDate(value)) {
            throw Error('User.email must be a date to format YYYY/MM/DD')
        }
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