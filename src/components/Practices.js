import React from 'react';
import { not, find, propEq } from 'ramda';

import { PracticesContext } from '../context/PracticesContext';
import { PrinciplesContext } from '../context/PrinciplesContext';

import { Flag, H2, H3, Box, Grid, GridItem } from './index';

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
    return <H2>Add some practices dude</H2>;
  }

  return (
    <>
      <H2>Practices</H2>

      <Grid>
        {practices.map((practice) => {
          const { id, title, why, how, principles } = practice;

          return (
            <GridItem key={id} width={[1, 1 / 3, 1 / 5]}>
              <Box bg="beige">
                {title && <H3>{title}</H3>}
                {why && <p>Why: {why}</p>}
                {how && <p>How: {how}</p>}

                {principles && <PrincipleFlags items={principles} />}
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

export default Practices;
