
import "../styles/testimonies.css"
import React, { Component } from 'react'

 class testimonies extends Component {
  render() {
    return (
      <div className="main-container">
      <img
       src= {require(`../images/${this.props.imagen}.png`)} alt={this.props.alternative}
       className="testimonies-images" />

      <div className="testimonies-text">
        <p className="TitleName"><strong> {this.props.name} </strong> in {this.props.country}</p>
        <p className="Carrer">{this.props.carreer} at <strong>{this.props.company}</strong></p>
        <p className="description-text">
        "{this.props.testimony}"
        </p>
      </div>
    </div>
    )
  }
}

export default testimonies;