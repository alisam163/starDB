import React from 'react'

export const PlanetInfo = ({ planet }) => {
  const { name, population, rotationPeriod, diameter } = planet
  return (
    <>
      <div className="col">
        <h2 className="row justify-content-start">{name}</h2>
        <ul className="">
          <li className="row justify-content-around">
            <span className="col">Population</span>
            <span className="col">{population}</span>
          </li>
          <li className="row justify-content-around">
            <span className="col">Rotation period</span>
            <span className="col">{rotationPeriod}</span>
          </li>
          <li className="row justify-content-around">
            <span className="col">Diameter</span>
            <span className="col">{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}
