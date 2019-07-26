import styled from 'styled-components';
import { flexbox, space } from 'styled-system';

const Grid = styled.div(
  {
    display: 'flex',
  },
  flexbox,
  space,
);

Grid.defaultProps = {
  flexWrap: 'wrap',
  mt: [-3],
  ml: [-3],
};

export default Grid;
