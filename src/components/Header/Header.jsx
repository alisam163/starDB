import React, { Component } from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

export default class Header extends Component {
  render() {
    const { onServiceChange } = this.props
    return (
      <div className="header d-flex">
        <Logo />
        <nav className={styles.menu}>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/starships">Starships</Link>
          </li>
        </nav>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => onServiceChange()}
        >
          Change service
        </button>
      </div>
    )
  }
}
