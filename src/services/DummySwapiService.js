class DummySwapyService {
  _apiBase = 'https://swapi.dev/api'
  _imageBase = 'https://starwars-visualguide.com/assets/img'

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`)
    if (!res.ok) {
      throw new Error(`Ошибка запроса ${res.status}`)
    }
    return await res.json()
  }

  getAllPerson = async () => {
    return [
      {
        id: 1,
        name: 'person list',
        gender: 'male',
        birthYear: 2023,
        eyeColor: 'green',
      },
      {
        id: 20,
        name: 'person list',
        gender: 'male',
        birthYear: 2023,
        eyeColor: 'green',
      },
      {
        id: 19,
        name: 'person list',
        gender: 'male',
        birthYear: 2023,
        eyeColor: 'green',
      },
    ]
  }

  getPerson = async () => {
    return {
      id: 2,
      name: 'person',
      gender: 'male',
      birthYear: 2023,
      eyeColor: 'blue',
    }
  }
  getAllPlanets = async () => {
    return [
      {
        id: 3,
        name: 'planet list',
        population: 20326056,
        rotationPeriod: 56,
        diameter: 30265,
      },
      {
        id: 18,
        name: 'planet list',
        population: 20326056,
        rotationPeriod: 56,
        diameter: 30265,
      },
      {
        id: 17,
        name: 'planet list',
        population: 20326056,
        rotationPeriod: 56,
        diameter: 30265,
      },
    ]
  }
  getPlanet = async () => {
    return {
      id: 4,
      name: 'planet',
      population: 56523654,
      rotationPeriod: 456,
      diameter: 45613,
    }
  }

  getAllStarships = async () => {
    return [
      {
        id: 5,
        name: 'starship list',
        model: 'model',
        manufacturer: 'manufacturer',
        costInCredits: 'credits',
        length: 'length',
        crew: 'crew',
        passengers: 'passengers',
        cargoCapacity: 'cargo_capacity',
      },
      {
        id: 16,
        name: 'starship list',
        model: 'model',
        manufacturer: 'manufacturer',
        costInCredits: 'credits',
        length: 'length',
        crew: 'crew',
        passengers: 'passengers',
        cargoCapacity: 'cargo_capacity',
      },
      {
        id: 15,
        name: 'starship list',
        model: 'model',
        manufacturer: 'manufacturer',
        costInCredits: 'credits',
        length: 'length',
        crew: 'crew',
        passengers: 'passengers',
        cargoCapacity: 'cargo_capacity',
      },
    ]
  }
  getStarships = async () => {
    return {
      id: 6,
      name: 'starship',
      model: 'model',
      manufacturer: 'manufacturer',
      costInCredits: 'credits',
      length: 'length',
      crew: 'crew',
      passengers: 'passengers',
      cargoCapacity: 'cargo_capacity',
    }
  }

  getPersonImage = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`
  }

  getStarshipsImage = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`
  }

  getPlanetImage = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    }
  }
}

export default DummySwapyService
