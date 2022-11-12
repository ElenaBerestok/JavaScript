const form = document.getElementById('form');
const select = document.getElementById('select');
const input = document.getElementById('input');


class Card {
    constructor () {
        this.card = document.createElement('div');
        this.card.classList.add('card')
    }

    renderBtn () {
        const BtnClose = document.createElement('button');

        BtnClose.classList.add('BtnClose')

        BtnClose.innerHTML = 'Close';

        BtnClose.addEventListener('click', () => {
            this.hide()
        });

        this.card.append(BtnClose)

    }

    show() {
        document.body.append(this.card)
    };

    hide() {
        this.card.remove();
    }
};

class StarshipCard extends Card {
    constructor (options) {
        const {name, model, manufacturer, max_atmosphering_speed, ...rest} = options;
        super(rest)

        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.max_atmosphering_speed = max_atmosphering_speed;

        this.render();
    }

    render() {
        super.renderBtn();

        const container = document.createElement("div");
        const name = document.createElement('h1');
        const model = document.createElement('p');
        const manufacturer = document.createElement('p');
        const max_atmosphering_speed = document.createElement('p');

        container.classList.add("card-container");

        name.innerText = this.name;
        model.innerText = this.model;
        manufacturer.innerText = this.manufacturer;
        max_atmosphering_speed.innerText = this.max_atmosphering_speed;

        container.append(name, model, manufacturer, max_atmosphering_speed)
        this.card.append(container)
    }

    
};

class PlanetCard extends Card {
    constructor (options) {
        const {name, climate, terrain, population, ...rest} = options;
        super(rest)

        this.name = name;
        this.climate = climate;
        this.terrain = terrain;
        this.population = population;

        
        this.render();
    }

    render() {
        super.renderBtn();

        const container = document.createElement("div");
        const name = document.createElement('h1');
        const climate = document.createElement('p');
        const terrain = document.createElement('p');
        const population = document.createElement('p');

        container.classList.add("card-container");

        name.innerText = this.name;
        climate.innerText = this.climate;
        terrain.innerText = this.terrain;
        population.innerText = this.population;

        container.append(name, climate, terrain, population)
        this.card.append(container)
    }
};

class VehicleCard extends Card {
    constructor (options) {
        const {name, cost_in_credits, crew, passengers, ...rest} = options;
        super(rest)

        this.name = name;
        this.cost_in_credits = cost_in_credits;
        this.crew = crew;
        this.passengers = passengers;

        this.render();
    }

    render() {
        super.renderBtn();

        
        const container = document.createElement("div");
        const name = document.createElement('h1');
        const cost_in_credits = document.createElement('p');
        const crew = document.createElement('p');
        const passengers = document.createElement('p');

        container.classList.add("card-container");

        name.innerText = this.name;
        cost_in_credits.innerText = this.cost_in_credits;
        crew.innerText = this.crew;
        passengers.innerText = this.passengers;

        container.append(name, cost_in_credits, crew, passengers)
        this.card.append(container)
    };

};

class API { 

    errors = async (response) => {
        if(!response.ok) {
            const {error} = await response.json()
            throw new Error(error)
        }
    
        return response
    }

    getStarship = async (id) => {
        const starship = await this.sendRequest(`https://swapi.dev/api/starships/${id}`)
        return starship
    }; 

    getPlanet = async (id) => {
        const planet = await this.sendRequest(`https://swapi.dev/api/planets/${id}`)
        return planet
    };

    getVehicle = async (id) => {
        const vehicle = await this.sendRequest(`https://swapi.dev/api/vehicles/${id}`)
        return vehicle
    };

    sendRequest = async(url) => {
        const response = await this.errors(await fetch(url))
        const result = await response.json()
        console.log(result)
        return result
    };
};

const api = new API();

const CARD_MAP = {
    starships: StarshipCard,
    planets: PlanetCard,
    vehicles: VehicleCard,
};

const API_MAP = {
    starships: api.getStarship,
    planets: api.getPlanet,
    vehicles: api.getVehicle,
}

const handleSubmit = async (event) => {
    event.preventDefault();

    const type = select.value;
    const id = input.value;

    try {
        const item = await API_MAP[type](id);
        const card = new CARD_MAP[type](item);
        card.show()
    } catch (err) {
        alert (err)
    }
};

form.addEventListener('submit', handleSubmit)