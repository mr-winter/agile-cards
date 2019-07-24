import React from 'react';
import { not } from 'ramda';

import { PrinciplesContext } from '../context/PrinciplesContext';
import { Loading } from '../components';

function Principles() {
  const { principles, loading } = React.useContext(PrinciplesContext);

  if (loading) {
    return <Loading size={24} />;
  }

  if (not(principles.length)) {
    return <h2>Add some principles dude</h2>;
  }

  return (
    <div>
      {principles.map((principle) => {
        const { id, text } = principle;

        return (
          <div key={id}>
            <h3>Principle #{id}</h3>

            {text && <p>{text}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Principles;
