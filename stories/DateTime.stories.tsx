import React from 'react';
import { withKnobs, text, boolean, select, date } from '@storybook/addon-knobs';
import DateTime from '../src/DateTime';
import TimeAgo from '../src/DateTime/TimeAgo';

export default {
  title: 'DateTime',
  decorators: [withKnobs],
};

export const dateOnly: React.FC = () => (
  <DateTime
    value={date('value', new Date())}
    inValidText={text('inValidText', 'Never')}
    format={text('format', 'yyyy-MM-dd')}
  />
);

export const timeOnly: React.FC = () => (
  <DateTime
    value={date('value', new Date())}
    inValidText={text('inValidText', 'Never')}
    format="HH:mm:SS"
  />
);

export const timeAgo: React.FC = () => (
  <TimeAgo
    value={date('value', new Date('2020-06-02 20:20:20'))}
    inValidText={text('inValidText', 'Never')}
    strict={boolean('strict', false)}
    options={{
      addSuffix: boolean('options:addSufix', false),
      includeSeconds: boolean('options: includeSeconds', false),
    }}
  />
);
