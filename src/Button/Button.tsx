import React, { FC } from 'react';
import {
  Button as PFButton,
  ButtonProps as PFButtonProps,
} from '@patternfly/react-core';

// interface ButtonProps extends PFButtonProps {}

export const Button: FC<PFButtonProps> = (props: PFButtonProps) => {
  const { children, ...rest } = props;
  return <PFButton {...rest}>{children}</PFButton>;
};

export default Button;
