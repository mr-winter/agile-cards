import styled from 'styled-components';

import {
  borderRadius,
  boxShadow,
  buttonStyle,
  space,
  fontSize,
  variant,
} from 'styled-system';

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes',
});

const Button = styled('button')(
  {
    appearance: 'none',
    cursor: 'pointer',
    borderWidth: '2px',
    borderStyle: 'solid',
    outline: 0,
    padding: '.2em .5em',
  },
  borderRadius,
  boxShadow,
  buttonStyle,
  buttonSize,
  space,
  fontSize,
);

Button.defaultProps = {
  type: 'button',
  borderRadius: 1,
  variant: 'primary',
  size: 'medium',
};

export default Button;
