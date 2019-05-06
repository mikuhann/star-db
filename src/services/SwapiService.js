export default class SwapiService {
  _baseUrl = 'https://swapi.co/api/';
  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }
  _transformPlanetData(planet) {
    return {
      pictureId: this._extractId(planet),
      planetName: planet.name,
      planetPopulation: planet.population,
      planetRotationPeriod: planet.rotation_period,
      planetDiameter: planet.diameter
    }
  }
  _transformStarshipData(starship) {
    return {
      pictureId: this._extractId(starship),
      starshipName: starship.name,
      starshipModel: starship.model,
      starshipManufacturer: starship.manufacturer,
      starshipCostInCredits: starship.costInCredits,
      starshipLength: starship.length,
      starshipCrew: starship.crew,
      starshipPassengers: starship.passengers,
      starshipCargoCapacity: starship.cargoCapacity,
    }
  }
  _transformPersonData(person) {
    return {
      pictureId: this._extractId(person),
      personName: person.name,
      personGender: person.gender,
      personBirthYear: person.birthYear,
      personEyeColor: person.eyeColor
    }
  }
  async getData(url) {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}. Received ${res.status}`);
    }
    return await res.json();
  }
  async getAllPersons() {
    const res = await this.getData(`people`);
    return res.results.map(this._transformPersonData);
  }
  async getPerson(id) {
    const person = await this.getData(`people/${id}`);
    return this._transformPersonData(person);
  }
  async getAllPlanets() {
    const res = await this.getData(`planets`);
    return res.results.map(this._transformPlanetData);
  }
  async getPlanet(id) {
    const planet = await this.getData(`planets/${id}`);
    return this._transformPlanetData(planet);
  }
  async getAllStarships() {
    const res = await this.getData(`starships`);
    return res.results.map(this._transformStarshipData);
  }
  async getStarship(id) {
    const starship =  await this.getData(`starships/${id}`);
    return this._transformStarshipData(starship);
  }
}