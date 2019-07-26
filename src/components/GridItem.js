import styled from 'styled-components';
import { space, layout } from 'styled-system';

const GridItem = styled.div(space, layout);

GridItem.defaultProps = {
  pt: [3],
  pl: [3],
};

export default GridItem;
