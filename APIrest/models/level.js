const client = require('./client');
const CoreModel = require('./coreModel');

module.exports = class Level extends CoreModel  {
    
    _label;
    _icon;
    _game_id;

    static tablename = 'level';

    constructor(obj) {
        super(obj);
        this.label = obj.label;
        this.icon = obj.icon;
        this.game_id = obj.game_id;
    }

    /******GETTER **********/
    get label() {
        return this._label
    }

    get icon() {
        return this._icon
    }

    get game_id() {
        return this._game_id
    }

    /********SETTER **********/
    set label(value) {
        this._label = value
    }

    set icon(value) {
        this._icon = value
    }

    set game_id(value) {
        this._game_id = value
    }
}