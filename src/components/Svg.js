import styled from 'styled-components';
import { space, fontSize, width, color } from 'styled-system';

const Svg = styled('svg')(space, fontSize, width, color);

Svg.defaultProps = {
  fill: 'currentColor',
  viewBox: '0 0 32 32',
  height: 32,
  width: 32,
};

export default Svg;
