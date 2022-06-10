const weatherForm = document.querySelector('.weather-search')
const weatherFormInput = document.querySelector('.weather-search__input')
const weatherApp = document.querySelector('.weather-app')

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'afd602ae8eeb088bfbefba1c772e31e9'

const FLAG_URL = 'https://countryflagsapi.com/png'

const GEOCODE_API = 'https://api.opencagedata.com/geocode/v1/json?q=' 

class GEO {
    constructor(url) {
        this.url = url
    }

    setLocationBlock = (text) => {
        const locationArea = document.querySelector('.weather-app__system-location')
              locationArea.innerHTML +=  `
                <b>${text}</b>
              `
    } 
    
    showCityInfo = (coordinates) => {
        const { latitude, longitude } = coordinates.coords
        fetch(`${this.url}${latitude}+${longitude}&key=4b7dfa8467a24ba49769abc1319178e4`)
            .then((resolve) => {
                return resolve.json()
            })
            .then((location) => {
                const currentLocation = location.results[0].formatted
                const message = `Your location is: ${currentLocation}`
                this.setLocationBlock(message)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    
    setErrorArea = () => {
        this.setLocationBlock('Well-well-well. You hide from me your location. So read message above!')
    }

    checkPosition = () => {
        navigator.geolocation.getCurrentPosition(this.showCityInfo, this.setErrorArea)
    }
}

const locationObj = new GEO(GEOCODE_API)
locationObj.checkPosition()

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const inputValue = weatherFormInput.value
    weatherFormInput.value = ''

    getForecast(inputValue)
})

const disableForm = () => {
    const isDisabled = weatherFormInput.hasAttribute('disabled')

    if(isDisabled) {
        weatherFormInput.removeAttribute('disabled')
        weatherForm.querySelector('.weather-search__submit').removeAttribute('disabled')
    }
    else {
        weatherFormInput.setAttribute('disabled', '')
        weatherForm.querySelector('.weather-search__submit').setAttribute('disabled', '')
    }
}

const toggleSystemMessage = () => {
    const errorBlock = document.querySelector('.system-error')
    const isHidden = errorBlock.hasAttribute('hidden')

    if (isHidden) {
        errorBlock.removeAttribute('hidden')
        disableForm()
    }
    else {
        errorBlock.setAttribute('hidden', '')
        disableForm()
    }
}

const toggleLoader = () => {
    const loader = document.querySelector('.loader')
    const isHidden = loader.hasAttribute('hidden')

    if (isHidden) {
        loader.removeAttribute('hidden')
        hideWeatherCard()
    }
    else {
        loader.setAttribute('hidden', '')
    }
}

const getWeatherImageURL = (code) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`
}

const getFlagURL = (countryCode) => {
    return `${FLAG_URL}/${countryCode}`
}

const createWeatherCard = (city) => {
    const { main } = city
    const mainTempC = Math.floor(main.temp - 273.15)
    const feelsTempC = Math.floor(main.feels_like - 273.15)

    const country = city.sys?.country

    const imagePath = getWeatherImageURL(city.weather[0].icon)
    const flagPath = getFlagURL(country)

    weatherApp.innerHTML = `
        <div class="weather-app__header">
            <span class="weather-app__city-name">${city.name}</span>
            <div class="weather-app__country">
                <span class="weather-app__country-name">${country}</span>
                <span class="weather-app__country-image">
                    <img src="${flagPath}" alt="">
                </span>
            </div>
        </div>
        <div class="weather-app__main"> 
            <span class="weather-app__temperature">${mainTempC}°C</span>
            <span class="weather-app__icon">
                <img src="${imagePath}" alt="">
            </span>
        </div>
        <div class="weather-app__footer">
            <span class="weather-app__feels-like">Feels like: ${feelsTempC}°C</span>
        </div>
    `
}

const hideWeatherCard = () => {
    weatherApp.innerHTML = ''
}

const getForecast = (city) => {
    toggleLoader()
    fetch(`${WEATHER_URL}/?q=${city}&appid=${API_KEY}`)
        .then((resolve) => {
            if(!resolve.ok) {
                throw new Error(`Problems with fetching city data. Didn't find ${city}. Please try again`)
            }
            return resolve.json()
        }).then((result) => {
            console.log(result)
            createWeatherCard(result)
        }).catch((error) => {
            console.error(error)
            toggleSystemMessage()
            setTimeout(() => {
                toggleSystemMessage()
            }, 2000)
        }).finally(() => {
            console.log('here')
            toggleLoader()
        })
}
