import styled from 'styled-components';
import { space, color, typography } from 'styled-system';

import headlineStyle from '../styles/headlines';

const H3 = styled.h3(headlineStyle, space, color, typography);

H3.defaultProps = {
  fontSize: 4,
};

export default H3;
