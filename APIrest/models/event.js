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
        this._label = value
    }

    set description(value) {
        this._label = value
    }

    set status(value) {
        this._status = value
    }

    set vocal(value) {
        this._vocal = value
    }
    
}