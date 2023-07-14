import { CarProps, FilterProps } from "@types"

export async function fectchCars(filters: FilterProps) {
    const headers = {
        'X-RapidAPI-Key': `${process.env.X_KEY}`,
        'X-RapidAPI-Host': `${process.env.X_HOST}`
    }

    const { manufacturer, year, model, limit, fuel } = filters

    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}?model=${model}?year=${year}?fuel_type=${fuel}limit?=${limit}`
    const response = await fetch(url, { headers: headers })
    const result = await response.json()

    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50
    const mileageFactor = 0.1
    const ageFactor = 0.05
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor
    const ageRate = (new Date().getFullYear() - year) * ageFactor
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate
  
    return rentalRatePerDay.toFixed(0)
}

export const generateCarImageurl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')
    const { make, year, model } = car
    url.searchParams.append('customer', 'hrjavascript-mastery')
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(" ")[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)

    return `${url}`
}