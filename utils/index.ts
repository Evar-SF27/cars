export async function fectchCars() {
    const headers = {
        'X-RapidAPI-Key': '45beaddbb4msh8f9fe43bf21936cp1ef447jsn3c5f55cace41',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'
    const response = await fetch(url, { headers: headers })
    const result = await response.json()

    return result
}