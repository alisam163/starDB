import React, { Component } from 'react'
import styles from './Menu.module.css'
export default class Menu extends Component {
  render() {
    return (
      <nav className={styles.menu}>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
      </nav>
    )
  }
}
