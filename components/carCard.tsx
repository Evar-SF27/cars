"use client"

import { useState } from 'react'
import { CarProps } from '@types'
import Image from 'next/image'
import CustomButton from './customButton'

interface CarCardProps {
    car: CarProps
}

const CarCard = ({ car } : CarCardProps) => {
    const { city_mpg, year, make, model, drive }  = car
    const [] = useState('')
  return (
    <div>
      Car Card
    </div>
  )
}

export default CarCard
