import styled from 'styled-components';
import { space, color, typography } from 'styled-system';

import headlineStyle from '../styles/headlines';

const H1 = styled.h1(headlineStyle, space, color, typography);

H1.defaultProps = {
  fontSize: 6,
};

export default H1;
