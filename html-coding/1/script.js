const PLANETS_URL = 'https://swapi.dev/api/planets'

// console.log('Fetching data is started.')
// fetch(PLANETS_URL)
//     .then((response) => {
//         return response.json()
//     })
//     .then((planets) => {
//         console.log(planets['results'])
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('Fetching data is ended.')
//     })


// const fetchPlanets = async () => {
//     try {
//         const response = await fetch(PLANETS_URL)
//         let planets = await response.json()
//         planets = planets['results']
//         console.log(planets)
//     } catch (error) {
//         console.error(error)
//     }
// }

// fetchPlanets()

const fetchPlanets = async (...ids) => {
    try {
        const requests = ids.map(id => fetch(`${PLANETS_URL}/${id}`))
        const resolve = await Promise.all(requests)
        const results = resolve.map(item => item.json())
        const planets = await Promise.all(results)
        console.log(planets)
    } catch (error) {
        console.error(error)
    }
}

fetchPlanets(2, 12, 3, 8)