class MarvelServices {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  _apiKey = "0add50672ad1856cc25c64440985be1a";

  getData = async (url) => {
    let data = await fetch(url);
    if (!data.ok) {
      throw new Error(`Error, status of the error is ${data.status}`);
    }
    return await data.json(); 
  };
  getAllCharacters = async (limit) => {
    const data = await this.getData(
      `${this._apiBase}characters?limit=${limit}&apikey=${this._apiKey}`
    );
    return data.data.results.map(this.transformCharacter);
  };
  getOneCharacter = async (id) => {
    const data = await this.getData(
      `${this._apiBase}characters/${id}?apikey=${this._apiKey}`
    );
    return this.transformCharacter(data.data.results[0]); 
  };
  transformCharacter = (data) => {
    return {
      id: data.id,
      imgSrc: data.thumbnail.path + "." + data.thumbnail.extension,
      name: data.name,
      description: data.description
        ? data.description
        : "SORRY, DESCRIPTION IS NOT AVAILABLE",
      homepage: data.urls[0].url,
      wiki: data.urls[1].url,
      comics: data.comics.items,
    };
  };
}

export default MarvelServices;