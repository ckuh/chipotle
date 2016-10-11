import React, { Component } from 'react'

import { connect } from 'react-redux'

// actions
import { getIngredients } from '../actions/ingredients.action'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: []
    }

    this.renderData = this.renderData.bind(this)
  }

  componentDidMount () {
    this.props.getIngredients()
  }

  renderData () {
    return this.props.ingredients.ingredientsList.map((item, key) => {
      return (
        <div key={key}>
          <h1>{item.name}</h1>
          <img src={item.url} />
        </div>
      )
    })
  }

  render () {
    let data

    if (this.props.ingredients.ingredientsList.length) {
      data = this.renderData()
    }

    return (
      <div>
        <h1>Hello World</h1>
        {data}
      </div>
    )
  }
}

const { object, func } = React.PropTypes

Home.propTypes = {
  getIngredients: func,
  ingredients: object
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients
  }
}

export default connect(mapStateToProps, { getIngredients })(Home)
