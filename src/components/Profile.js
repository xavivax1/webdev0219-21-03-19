import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Hola {this.props.match.params.username}</h1>
      </div>
    );
  }
}
export default withRouter(Profile);