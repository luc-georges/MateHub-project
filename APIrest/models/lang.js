const client = require('./client');
const CoreModel = require('./coreModel');

module.exports = class Lang extends CoreModel  {
    
    _label;
    _icon;

    static tablename = 'lang';

    constructor(obj) {
        super(obj);
        this.label = obj.label;
        this.icon = obj.icon;
    }

    /**********GETTER **********/
    get label() {
        return this._label
    }

    get icon() {
        return this._icon
    }

    /**********SETTER **********/
    set label(value) {
        this._label = value
    }

    set icon(value) {
        this._icon = value
    }

}