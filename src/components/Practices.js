import React, { useState } from 'react';
import { not, find, propEq } from 'ramda';

import { PracticesContext } from '../context/PracticesContext';
import { PrinciplesContext } from '../context/PrinciplesContext';

import { Button, Shield, H2, H3, Box, Grid, GridItem, Link } from './index';

function PrincipleShields({ items }) {
  const { principles } = React.useContext(PrinciplesContext);

  return (
    <Grid justifyContent="flex-end" mt={-1} ml={-1}>
      {items.map((item) => {
        const principle = find(propEq('id', item))(principles);
        const { id, color } = principle;

        return (
          <GridItem key={id} pt={1} pl={1}>
            <Shield label={id} color={color} />
          </GridItem>
        );
      })}
    </Grid>
  );
}

function Practices() {
  const [extend, toggleExtend] = useState(false);
  const { practices } = React.useContext(PracticesContext);

  if (not(practices.length)) {
    return <H2>Quick, come up with some practices!</H2>;
  }

  return (
    <>
      <Grid alignItems="stretch">
        {practices.map((practice) => {
          const { id, title, why, how, more, links, principles } = practice;

          const hasAdditionalContent = more || links;

          return (
            <GridItem key={id} width={[1, 1 / 2, 1 / 3]}>
              <Box
                bg="beige"
                boxShadow="medium"
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <div>
                  {title && <H3>{title}</H3>}

                  {why && (
                    <p>
                      <strong>Why:</strong> {why}
                    </p>
                  )}

                  {how && (
                    <p>
                      <strong>How:</strong> {how}
                    </p>
                  )}

                  {hasAdditionalContent && (
                    <>
                      {extend && more && <p>{more}</p>}
                      {extend &&
                        links &&
                        links.map((link, index) => {
                          return (
                            <p key={index}>
                              <Link href={link.url}>{link.description}</Link>
                            </p>
                          );
                        })}

                      <Button
                        onClick={() => {
                          toggleExtend(!extend);
                        }}
                        size="small"
                      >
                        {extend ? 'Show less' : 'Show more'}
                      </Button>
                    </>
                  )}
                </div>

                {principles.length > 0 && (
                  <PrincipleShields items={principles} />
                )}
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

export default Practices;
