import React, { Component } from 'react'
import Logo from './Logo'
import Menu from './Menu'

export default class Header extends Component {
  render() {
    const { onServiceChange } = this.props
    return (
      <div className="header">
        <Logo />
        <Menu />
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
