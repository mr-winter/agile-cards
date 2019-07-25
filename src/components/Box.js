import styled from 'styled-components';
import { space, color, layout } from 'styled-system';

const Box = styled.div(space, color, layout);

Box.defaultProps = {
  p: 3,
};

export default Box;
