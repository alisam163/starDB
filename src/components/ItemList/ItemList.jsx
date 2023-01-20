import React from 'react'
import SwapiService from './../../services/SwapiService'
import WithData from '../HocHelpers/WithData'

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props

  const items = data.map((item) => {
    const { id } = item
    const label = renderLabel(item)

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    )
  })

  return <ul className="item-list list-group itemsListGroup">{items}</ul>
}

const { getAllPerson } = new SwapiService()

export default WithData(ItemList, getAllPerson)
