import React from 'react';
import { not } from 'ramda';

import { PrinciplesContext } from '../context/PrinciplesContext';
import { Loading, H2, H3, Box, Grid, GridItem } from '../components';

function Principles() {
  const { principles, loading } = React.useContext(PrinciplesContext);

  if (loading) {
    return <Loading size={24} />;
  }

  if (not(principles.length)) {
    return <H2>Help, we have no principles!</H2>;
  }

  return (
    <>
      <Grid alignItems="stretch">
        {principles.map((principle) => {
          const { id, text, color } = principle;

          return (
            <GridItem key={id} width={[1, 1 / 2, 1 / 3, 1 / 4]}>
              <Box bg={color} color="white" height="100%" boxShadow="medium">
                <Grid>
                  <GridItem width={1 / 4}>
                    <H3 fontSize={8} lineHeight={1}>
                      {id}
                    </H3>
                  </GridItem>
                  {text && (
                    <GridItem width={3 / 4}>
                      <p>{text}</p>
                    </GridItem>
                  )}
                </Grid>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

export default Principles;
