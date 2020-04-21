import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '@patternfly/react-core/dist/styles/base.css';
import '../src/base.css';

addDecorator(
  withInfo({
    styles: {
      infoStory: {
        padding: '20px 40px 40px',
      },
    },
    inline: true,
    source: true,
  })
);
