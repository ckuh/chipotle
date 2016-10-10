import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: []
    }

    this.renderData = this.renderData.bind(this)
  }

  componentDidMount () {
    this.getData()
  }

  getData () {
    return axios.get(
      '/api/ingredients'
    )
    .then((resp) => {
      this.setState({data: resp.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  renderData () {
    return this.state.data.map((item, key) => {
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

    if (this.state.data) {
      data = this.renderData()
    }

    return (
      <div>
        <h1>Hello World</h1>
        <pre>
          <code>
            {JSON.stringify(this.props, null, 4)}
          </code>
        </pre>
        {data}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients
  }
}

export default connect(mapStateToProps)(Home)
