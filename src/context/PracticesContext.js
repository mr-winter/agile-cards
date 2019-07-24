import React from 'react';

import data from '../data/practices';

let PracticesContext;
const { Provider, Consumer } = (PracticesContext = React.createContext());

class PracticesProvider extends React.Component {
  state = {
    practices: data.practices,
  };

  render() {
    const { practices } = this.state;

    return (
      <Provider
        value={{
          practices,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { PracticesProvider, Consumer as PracticesConsumer, PracticesContext };
