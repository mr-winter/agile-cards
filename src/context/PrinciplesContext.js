import React from 'react';

import data from '../data/principles';

let PrinciplesContext;
const { Provider, Consumer } = (PrinciplesContext = React.createContext());

class PrinciplesProvider extends React.Component {
  state = {
    principles: data.principles,
  };

  render() {
    const { principles } = this.state;

    return (
      <Provider
        value={{
          principles,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export {
  PrinciplesProvider,
  Consumer as PrinciplesConsumer,
  PrinciplesContext,
};
