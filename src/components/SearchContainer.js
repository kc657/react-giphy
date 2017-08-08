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
    this.setState({query: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    const giphyApiData = {
      method: 'GET',
      api_key: 'dc6zaTOxFJmzC', // 919b5d9be5f245b7b54926622b52df9e
      q: this.state.query,
      headers: {}
    }

    fetch('http://api.giphy.com/v1/gifs/search?api_key=' + giphyApiData.api_key + '&q=' + giphyApiData.q)
    .then(response => response.json())
    .then((test) => {
      this.setState({
        results: test.data,
        query: this.state.query,
        searched: true
      })
    })
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
