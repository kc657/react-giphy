import React, { Component } from 'react'
import Search from './Search.js' // /SearchContainer is parent of Search
import Results from './Result.js' // SearchContainer is parent of Results

class SearchContainer extends Component {
  constructor (props) {
    super()
    this.state = {
      query: '',
      searched: false,
      results: []
    }
  }

  handleChange (event) {
    console.log('change')
    this.setState({query: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    const giphyApiData = {
      method: 'GET',
      api_key: 'dc6zaTOxFJmzC',
      q: this.state.query,
      headers: {}
    }
    console.log(giphyApiData)
    fetch('http://api.giphy.com/v1/gifs/search', giphyApiData)
    .then(response => response.json())
    .then(json => this.setState({
      results: json,
      searched: true
      })
    )
  }

  render () {
    return (
      <div className='SearchContainer'>
        <Search
          handleSubmit={(event) => this.handleSubmit(event)}
          handleChange={(event) => this.handleChange(event)}
          query={this.state.query}
        />
        <Results
          searchResults={this.state.results}
        />
      </div>
    )
  }
}

export default SearchContainer
