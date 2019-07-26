import React from 'react';
import styled from 'styled-components';
import { color, typography, space, layout, system } from 'styled-system';

import { Svg } from './index';

const Div = styled.div(
  {
    position: 'relative',
  },
  layout,
);

const Label = styled.span(
  {
    position: 'absolute',
    left: 0,
    right: 0,
    display: 'block',
    textAlign: 'center',
  },
  system({
    fontWeight: {
      property: 'fontWeight',
      scale: 'fontWeights',
    },
  }),
  color,
  space,
  typography,
);

function Shield({ label, color, size }) {
  const width = size;
  const height = Math.floor((30 / 25) * size);

  const fontSize = Math.floor((16 / 25) * size);

  return (
    <Div height={height}>
      {label && (
        <Label fontSize={fontSize} fontWeight={2} color="white" p={1}>
          {label}
        </Label>
      )}
      <Svg
        color={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 30"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path d="M0 16.4285V0H25V16.4285C25 25.1786 12.3239 30 12.3239 30C12.3239 30 0 24.4643 0 16.4285Z" />
      </Svg>
    </Div>
  );
}

Shield.defaultProps = {
  size: 25,
};

export default Shield;
