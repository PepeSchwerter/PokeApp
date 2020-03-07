import axios from 'axios';

export default class Pokemon {
    constructor(query) {
        this.query = query;
    }

    async getResults(query){
        try{
            const res = await axios(`https://pokeapi.co/api/v2/pokemon/${this.query}`);
            this.name = res.data.name;
            this.id = res.data.id;
            this.types = res.data.types;
        } catch (error){
            alert(error);
        }
    }
}