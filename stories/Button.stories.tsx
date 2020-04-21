import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from '../src/Button/Button';
import { ButtonVariant } from '@patternfly/react-core';

export default { title: 'Button', decorators: [withKnobs] };

export const defaultButton: React.FC = () => (
  <Button
    variant={select('variant', ButtonVariant, ButtonVariant.primary)}
    isActive={boolean('isActive', false)}
    isBlock={boolean('isBlock', false)}
    isDisabled={boolean('isDisabled', false)}
    onClick={action('Click')}
  >
    {text('Label', 'Hello Shield')}
  </Button>
);
