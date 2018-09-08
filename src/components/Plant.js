import React from 'react'

const Plant = ({ plant }) => {
  return (
    <li key={plant.id}>
      <strong>{plant.finnishName}</strong> -
                {plant.scientificName} -
                {plant.description}
    </li>
  )
}

export default Plant