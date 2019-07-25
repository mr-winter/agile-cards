import styled from 'styled-components';
import { space, color, typography } from 'styled-system';

import headlineStyle from '../styles/headlines';

const H2 = styled.h2(headlineStyle, space, color, typography);

H2.defaultProps = {
  fontSize: 5,
};

export default H2;
