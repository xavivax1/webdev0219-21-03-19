import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#666', padding: '2rem', color: '#fff'}}>
        {this.props.children}
      </div>
    );
  }
}

export default Jumbotron;