class MarvelServices {
  _apiBase='https://gateway.marvel.com:443/v1/public/'
  _apiKey='0add50672ad1856cc25c64440985be1a'

  getData = async(url) => {
    let data = await fetch(url)
    if(!data.ok) {
      throw new Error(`Error, status of the error is ${data.status}`)
    }
    return await data.json() // в формат джейсон перевели
  }
  getAllCharacters = async () => {
    const data = await this.getData(`${this._apiBase}characters?limit=9&apikey=${this._apiKey}`)
    return data.data.results.map(this.transformCharacter)

  }
  getOneCharacter = async (id) => { //!!! чтоб промис успел прийти !!
    const data = await this.getData(`${this._apiBase}characters/${id}?apikey=${this._apiKey}`)
    return this.transformCharacter(data.data.results[0]) // оптимизация кода - вместо даты сразу передаем в значение развернутое чтоб не писать каждый раз
  }
  transformCharacter = (data) => { //чтоб не работать с лишней инфой - сразу приходит то что нам нужно, потому что повторяется такой же блок на странице

    return{
      id: data.id,
      imgSrc: data.thumbnail.path + "." + data.thumbnail.extension ,
      name: data.name,
      description: data.description ? data.description : 'SORRY, DESCRIPTION IS NOT AVAILABLE',
      homepage: data.urls[0].url,
      wiki: data.urls[1].url,
      comics: data.comics.items
    }

  }

}

export default MarvelServices;
