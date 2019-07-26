import styled from 'styled-components';
import { flexbox, space, color, layout, shadow } from 'styled-system';

const Box = styled.div(flexbox, space, color, layout, shadow);

Box.defaultProps = {
  p: 3,
};

export default Box;
