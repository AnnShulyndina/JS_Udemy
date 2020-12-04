export default class GotService {
    
    // коснтруктор для инициализации apibase
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        
        // если ответ с ошибкой, то вывыдим в консоль new Error
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }
    
    getAllBooks = async () => {
        const res = await this.getResource('/books/');
        console.log("allBooks", res);
        return res.map(this._transformBook);
    }
    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`)
        return this._transformBook(book);
    }
    
    
    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5&pageSize=10')
        console.log("allChar", res)
        return res.map(this._transformCharacter)
    }
    getCharacter = async (id) => {
        const char = await this.getResource(`/characters/${id}/`)
        return this._transformCharacter(char);
    }
    
    
    getAllHouses = async () => {
        const res = await this.getResource('/houses/')
        console.log('allHouses', res)
        return res.map(this._transformHouse)
    }
    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`)
        return this._transformHouse(house);
    }
    
    isSet(data){
        if(data){
            return data
        } else {
            return 'no data :('
        }
    }
    
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1]
    }
    
    
    _transformCharacter = (char) => {
            return {
                id: this._extractId(char),
                name: this.isSet(char.name),
                gender: this.isSet(char.gender),
                born: this.isSet(char.born),
                died: this.isSet(char.died),
                culture: this.isSet(char.culture)
            };
    }
    
       _transformBook = (book) => {
            return {
                id: this._extractId(book),
                name: this.isSet(book.name),
                numberOfPages: this.isSet(book.numberOfPages),
                publisher: this.isSet(book.publisher),
                released: this.isSet(book.released)
            }
        }
        
        _transformHouse = (house) => {
            return {
                id: this._extractId(house),
                name: this.isSet(house.name),
                region: this.isSet(house.region),
                words: this.isSet(house.words),
                titles: this.isSet(house.titles),
                ancestralWeapons: this.isSet(house.ancestralWeapons)
            }
        }
}

// const got = new GotService();
//
// got.getAllCharacters()
//     .then(res => {
//         res.forEach(item => console.log(item.name))
//     });
//
// got.getCharacter(155)
//     .then(res => console.log(res))
//
// got.getAllBooks()
//     .then(res=> {
//         res.forEach(item => console.log(item.name))
//     });
//
// got.getBook(4)
//     .then(res => console.log(res))
//
// got.getAllHouses()
//     .then(res=> {
//         res.forEach(item => console.log(item.name))
//     });
//
// got.getHouse(155)
//     .then(res => console.log(res))


