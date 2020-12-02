import Spinner from "../components/spinner";

export default class GotService {
    // коснтруктор для инициализации apibase
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        
        // если ответ с ошибкой, то вывыдим в консоль new Error
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }
    к
    async getAllCharacters() {
        const res = await this.getResource('/characters?page=5&pageSize=10')
        console.log("all", res)
        return res.map((el) => (
            this._transformCharacter(el)
        ))
    }
    
    async getCharacter(id) {
        const char = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(char);
    }
    
    getAllHouses() {
        return this.getResource('/houses')
    }
    
    getHouse(id) {
        return this.getResource(`/houses/${id}`)
    }
    
    _transformCharacter(char) {
        // console.log("char", char)
        if (char) {
            return {
                gender: char.gender,
                name: char.name,
                born: char.born,
                died: char.died,
                culture: char.culture
            }
        }
        return {}
    }
    
    /*    _transformBook(book) {
            return {
                name: book.name,
                numberOfPages: book.numberOfPages,
                publiser: book.publiser,
                realised: book.realised,
            }
        }
        
        _transformHouse(house) {
            return {
                name: house.name,
                region: house.region,
                words: house.words,
                titles: house.titles,
                overlord: house.overlord,
                ancestralWeapons: house.ancestralWeapons
            }
        }*/
}

const got = new GotService();
got.getAllCharacters()
    .then(res => {
        res.forEach(item => console.log(item.name))
    });

got.getCharacter(155)
    .then(res => console.log(res))


