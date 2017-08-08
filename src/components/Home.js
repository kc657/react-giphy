// Developer TODO: Define App component defintion here
import React, {Component} from 'react'
import HelloWorld from './HelloWorld.js'
import Header from './Header.js'
import SearchContainer from './SearchContainer.js'

class HomePage extends Component {
  render () {
    return (
      <div className='home'>
        <HelloWorld />
        <Header />
        <SearchContainer />
      </div>
    )
  }
}

export default HomePage
