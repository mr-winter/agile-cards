import styled from 'styled-components';
import { Box } from '@rebass/grid';

const GridItem = styled(Box)``;

GridItem.defaultProps = {
  pt: [2, 3],
  pl: [2, 3],
};

export default GridItem;
