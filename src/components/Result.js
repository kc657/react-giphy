import React, { Component } from 'react';

class Results extends Component{
  render() {
    return (
      <div className="Results">
        {this.props.searchResults.map((item, index) => (
            <div key={item.id}>
              <img
                className="img-thumbnail"
                src={item.images.fixed_height.url}
              />
              <p>Source: <a href={item.source}>{item.source}</a></p>
            </div>
          )
        )}
      </div>
    )
  }
};

export default Results;
