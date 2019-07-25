import styled from 'styled-components';
import { Flex } from '@rebass/grid';
// import { space, grid } from 'styled-system';

// const Grid = styled(Flex);
const Grid = styled(Flex)``;

Grid.defaultProps = {
  flexWrap: 'wrap',
  mt: [-2, -3],
  ml: [-2, -3],
};

export default Grid;
