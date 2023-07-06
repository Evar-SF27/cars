export async function fectchCars() {
    const headers = {
        'X-RapidAPI-Key': `${process.env.X_KEY}`,
        'X-RapidAPI-Host': `${process.env.X_HOST}`
    }

    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla'
    const response = await fetch(url, { headers: headers })
    const result = await response.json()

    return result
}