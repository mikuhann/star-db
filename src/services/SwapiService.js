export default class SwapiService {
  _baseUrl = 'https://swapi.co/api/';
  async getData(url) {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}. Received ${res.status}`);
    }
    return await res.json();
  }
  async getAllPersons() {
    const res = await this.getData(`people`);
    return res.results;
  }
  getPerson(id) {
    return this.getData(`people/${id}`);
  }
  async getAllPlanets() {
    const res = await this.getData(`planets`);
    return res.results;
  }
  getPlanet(id) {
    return this.getData(`planets/${id}`);
  }
  async getAllStarships() {
    const res = await this.getData(`starships`);
    return res.results;
  }
  getStarship(id) {
    return this.getData(`starships/${id}`);
  }
}