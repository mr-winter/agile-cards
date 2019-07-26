import styled from 'styled-components';
import { color, typography, variant } from 'styled-system';

const linkStyles = variant({
  prop: 'type',
  key: 'linkStyles',
});

const Link = styled.a(color, typography, linkStyles);

Link.defaultProps = {
  href: '#',
  type: 'primary',
};

export default Link;
