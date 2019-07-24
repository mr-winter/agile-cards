import React from 'react';
import { not, find, propEq } from 'ramda';

import { PracticesContext } from '../context/PracticesContext';
import { PrinciplesContext } from '../context/PrinciplesContext';

import { Flag } from './index';

function PrincipleFlags({ items }) {
  const { principles } = React.useContext(PrinciplesContext);

  return (
    <div>
      {items.map((item) => {
        const principle = find(propEq('id', item))(principles);
        const { id, color } = principle;

        return <Flag key={id} label={id} color={color} />;
      })}
    </div>
  );
}

function Practices() {
  const { practices } = React.useContext(PracticesContext);

  if (not(practices.length)) {
    return <h2>Add some practices dude</h2>;
  }

  return (
    <div>
      {practices.map((practice) => {
        const { id, title, why, how, principles } = practice;

        return (
          <div key={id}>
            {title && <h3>{title}</h3>}
            {why && <p>Why: {why}</p>}
            {how && <p>How: {how}</p>}

            {principles && <PrincipleFlags items={principles} />}
          </div>
        );
      })}
    </div>
  );
}

export default Practices;
