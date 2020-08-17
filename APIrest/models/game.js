const client = require('./client');
const CoreModel = require('./coreModel');

module.exports = class Game extends CoreModel  {
    
    _name;
    _image;
    _order;

    static tablename = 'game';

    constructor(obj) {
        super(obj);
        this.name = obj.name;
        this.image = obj.image;
        this.order = obj.order;

    }

    /*********GETTER *************/
    get name(){
        return this._name
    }

    get image(){
        return this._image
    }

    get order(){
        return this._order
    }

    /********SETTER *************/

    set name(value) {
        this._name = value
    }

    set image(value) {
        this._image = value
    }

    set order(value) {
        this._order = value
    }
}