const client = require('./client');

class CoreModel {

    _id;

    static tablename = null;
    
    constructor(obj) {
        this.id = obj.id;
    }

    get id() {
        return this._id;
    }

    set id(newId) {
        this._id = newId;
    }

    /**
     * methode static permettant de selectionner tout les champs d'une table
     * @static
     * @returns {object} object comportant tout les champs de la table
     */
    static async getAll() {
        try {
            const query = `SELECT * FROM ${this.schema}"${this.tablename}"`;
            const result = await client.query(query);

            const formattedResults = result.rows.map((elem) => {
             return new this(elem);
            });

            return formattedResults;
        } catch (error) {
            console.log(error);
        }


    }

    /**
     * methode static permettant de retourné tout les entré d'un champ par l'id
     * @static
     * @param {int} id 
     * @returns {object} instance selectionnée
     */
    static async findById(id) {
        try {
            const result = await client.query(`SELECT * FROM getUserData(${id})`)
            if(result.rows.length === 0){
                return null
            };
            console.log(result.rows[0])
            // return new this(result.rows[0]);
            return result.rows[0]
        } catch (error) {
            console.log(error)
        }

    }

    /**
     * methode static permettant de retourné tout les entré d'un champ par une propriété
     * @static
     * @param {any} 
     * @returns {object} instance selectionnée
     */
    static async findBy(params){
        try {
            
            const prop = Object.keys(params);
            const value = Object.values(params);
    
            console.log(prop[0],value[0])
    
            const result = await client.query(`SELECT * FROM ${this.schema}"${this.tablename}" WHERE ${prop[0]} = $1`,[value[0]]);

            if(result.rows.length === 0){
                return null
            };

            return new this(result.rows[0]);
        } catch (error) {
            console.log('error:', error)
            
        }

    }
    
    /**
     * methode servant a delete un champ
     * @returns {boolean} true si tout c'est bien passé
     */
    async delete() {
        try {
            const query = {
                text: `
                    DELETE FROM ${this.constructor.schema}"${this.constructor.tablename}"
                    WHERE "id" = $1
                `,
                values: [this.id]
            };
    
            await client.query(query);
            return true
            
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * methode permettant d'inseré un champs dans une table
     * @returns {this} l'instance inserée
     */
    async insert() {
       try {

        const props = Object.keys(this);
        
        const columns = [];
        
        const placeholders = [];
        let indexPlaceholder = 1;
        
        const values = [];
        
        for (let prop of props) {
            
            if (prop === '_id') {
                
                continue;
            }

            prop = prop.replace('_', '');

            values.push(this[prop]);
            
            prop = '"' + prop + '"';

            columns.push(prop);
            placeholders.push('$' + indexPlaceholder);

            indexPlaceholder++;
        }


        const preparedQuery = {
            text: `
                INSERT INTO ${this.constructor.schema}"${this.constructor.tablename}"
                (${columns.join(',')})
                VALUES(${placeholders.join(',')})
                RETURNING id
            `,
            values
        }

        const result = await client.query(preparedQuery);
        //console.log('result:', result)


        this.id = result.rows[0].id;
        return this;

       } catch (error) {
           console.log('ereuuuur',error);
       }

    }

    /**
     * methode pour update un champ dans une table
     * @returns {this} return l'instance
     */
    async update() {    
        try {
            const props = Object.keys(this);

            const sets = [];
    
            const placeholders = [];
            let indexPlaceholder = 1;
    
            const values = [];
    
            for(let prop of props){
                
                if(prop === '_id'){
                    continue;
                }

                prop = prop.replace('_', '');
    
                values.push(this[prop]);
    
                prop = '"' + prop + '"';
    
                sets.push(`${prop} = $${indexPlaceholder}`);
    
                indexPlaceholder++;
            }

            values.push(this.id);

            const indexId = indexPlaceholder;
            
            const preparedQuery = {
                text: `
                    UPDATE ${this.constructor.schema}"${this.constructor.tablename}" SET
                    ${sets.join(',')}
                    WHERE id = $${indexId}
                `,
                values
            };

    
            const result = await client.query(preparedQuery);

            return this;
            
        } catch (error) {
            console.log(error)
        }

    }

    /**
     * methode pour update un champ dans une table si il existe et créer si non
     */
    async save(){
        try {
            if(this.id){
                await this.update()
            }else{
                await this.insert()
            }
            
        } catch (error) {
            console.log('error:', error)
            
        }
    }

}

module.exports = CoreModel;