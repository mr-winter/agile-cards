// import React from 'react';
import styled from 'styled-components';
import { space, color, layout } from 'styled-system';

const PageLayout = styled.div(
  {
    minWidth: 0,
  },
  space,
  color,
  layout,
);

PageLayout.defaultProps = {
  maxWidth: [null, null, null, 1400],
  py: [2, 3],
  px: [2, 3],
  mx: 'auto',
};

export default PageLayout;
