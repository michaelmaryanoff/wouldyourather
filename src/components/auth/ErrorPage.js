import React from 'react';
import NotFound from '../../api/NotFound.jpg';

class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <img className="ui fluid image" src={NotFound} alt="Page not found" />
      </div>
    );
  }
}

export default ErrorPage;
