// Task 1

const BASE_URL = 'https://ipapi.co/json/';
const BASE_URL_FLAG = 'https://restcountries.com/v2/name';
const preloader = document.getElementById('preloader');

// (название, столицу, валюту и флаг)
    // "country_name": "Ukraine",
    // "country_capital": "Kyiv",
    // "currency": "UAH",

const showPreloader = (show) => {
    if (show) {
      preloader.style.display = "block";
    } else {
      preloader.style.display = "none";
    }
};

const showCountryData = ({country_name: country, country_capital: capital, currency}, flag) => {
    let wrapperCountryData = document.getElementById('wrapper_country_data');

    let countryText = document.getElementById('country');
    countryText.innerText = country;
    console.log(country.innerText = country)

    let capitalText = document.getElementById('capital');
    capitalText.innerText = capital;
    console.log( capital.innerText = capital)

    let currencyText = document.getElementById('currency');
    currencyText.innerText = currency;

    showPreloader(false)

    return wrapperCountryData
}

const renderFlag = (flag) => {
    let flagCountry = document.getElementById('flag');
    let imgFlag = document.createElement('img');
    imgFlag.setAttribute('src', flag);
    imgFlag.classList.add('flag_img')

    flagCountry.append(imgFlag);
    console.log(`flagCountry`, flagCountry)

    return flagCountry
}

const getCountryFlag = async (countryData, url) => {

    try {
        const {country_name: country} = countryData;
        
        const response = await fetch (`${url}/${country}`);
        console.log(`response`, response)

        if ( response.status === 200 ) {
            const flag = await response.json();
            console.log(flag)
            const flagSrc = renderFlag(flag[0].flag);

            showCountryData(countryData, flagSrc)
        } else {
            throw new Error (`${response.status} An error has occurred`)
        }
        
    } catch (error) {
        let massage = error.massage
        alert(massage)
    }
}

const getIPUsers = async (url) => {
    showPreloader(true);
    
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            let countryData = await response.json();
            console.log(countryData)
            getCountryFlag(countryData, BASE_URL_FLAG)
        }
        else {
           throw new Error (`${response.status} An error has occurred`)
        }
    } catch (error) {
        let massage = error.massage
        alert(massage)
    }
}

// getIPUsers(BASE_URL)


// Task 2

const BASE_URL_CHARACTER = 'https://swapi.dev/api/people';
const form = document.getElementById('form');
const input = document.getElementById('input');

const card = document.createElement('div');

const characterContainer = document.getElementById('character_Container');



const handleRequestErrors = (response) => {
    if (!response.ok) {
        let {error} = response.json();
        throw new Error(response.status)
    }

    return response
};

const renderFilms = (res) => {

    
    let nameFilm = res.map(film => film.title)

    for (let name of nameFilm) {
        const elemFilm = document.createElement('p');
        elemFilm.innerText = name;
        card.append(elemFilm)
    }
   

    characterContainer.append(card)
    
}

const handlButtonFilms = async(character) => {

    const {films} = character;

    const filmsFetch = films.map((film) => fetch(film))
    
    try{
        const responses = await Promise.all(filmsFetch);
        const jsonResponses = responses.map((resp) => resp.json());
        const result = await Promise.all(jsonResponses)

        return renderFilms(result)
    } catch {
        alert ('Error')
    }

}

const renderCharacter = (character) => {

    let {name} = character;
    console.log(`name`, name)
   
    const h2 = document.createElement('h2')
    h2.innerText = name

    const button = document.createElement('button');
    button.innerText = 'Films';

    card.innerText = '';
    card.append(h2, button);
    characterContainer.append(card)

    button.addEventListener('click', (event) => {

        if (!event.target.hasAttribute('isActive')) {
            event.target.setAttribute('isActive', '')
            handlButtonFilms(character)
        } else {
            event.target.removeAttribute('isActive');
            event.target.nextElementSibling.remove()
        }
    })
}

const getIDCharacter = async(id) => {

    try {

        const response = await handleRequestErrors (
            await fetch(`${BASE_URL_CHARACTER}/${id}`)
        )
        const character = await response.json();
        console.log(character)

        await renderCharacter(character)

    } catch (error) {
        
        if (Number(error.massage) === 404) {
            alert("Character Not Found!")
        }
    }

    
}

const handleSubmitForm = (event) => {
    event.preventDefault();

    const {value} = input

    if (value === ''){
        alert ('Enter ID')
        return
    } else {
        getIDCharacter(value)
    }


   characterContainer.firstElementChild.remove()
}

form.addEventListener('submit', handleSubmitForm)