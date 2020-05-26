import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import { getDateTime } from './util';

export interface TimeAgoFormatOptions {
  includeSeconds?: boolean;
  addSuffix?: boolean;
  locale?: Locale;

  unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year';
  roundingMethod?: 'floor' | 'ceil' | 'round';
}

export interface TimeAgoProps {
  children?: string | Date | number;
  value?: string | Date | number;
  /** if the date is empty or invalid, will show this text */
  inValidText?: string;
  strict?: boolean;
  options?: TimeAgoFormatOptions;
}

export const TimeAgo: React.FC<TimeAgoProps> = (props: TimeAgoProps) => {
  const { children, value, inValidText, strict, options } = props;

  const dateTime = getDateTime(value || children);

  if (!dateTime) {
    return <>{inValidText}</>;
  }

  if (strict) {
    return <>{formatDistanceToNowStrict(dateTime, options)}</>;
  }

  return <>{formatDistanceToNow(dateTime, options)}</>;
};

TimeAgo.defaultProps = {
  inValidText: 'Invalid Date',
  strict: false,
};

export default TimeAgo;
