import React from 'react'

export const PlanetImg = ({ planet }) => {
  const { id } = planet
  return (
    <>
      <img
        className=""
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        width="150"
        height="150"
        alt="Аватар"
      ></img>
    </>
  )
}
