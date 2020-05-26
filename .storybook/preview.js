import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { addParameters } from '@storybook/react';
import './storybook.css';
import '@patternfly/react-core/dist/styles/base.css';
import '../src/base.css';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: [
    { name: 'light', value: '#ffffff', default: true },
    { name: 'dark', value: '#1e1e1e' },
  ],
});

addDecorator(
  // withInfo({
  //   styles: {
  //     infoStory: {
  //       padding: '20px 40px 40px',
  //     },
  //   },
  //   inline: true,
  //   source: true,
  // }),
  withA11y
);
