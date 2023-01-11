import React, { Component } from 'react'
import img from './../../images/spinner.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="container p-5 text-center">
        <img className="row-12" src={img} alt="img" />
      </div>
    )
  }
}
