import React from 'react';
import format from 'date-fns/format';
import { getDateTime } from './util';

export interface DateTimeProps {
  children?: string | Date | number;
  value?: string | Date | number;
  /** date format */
  format?: string;
  /** if the date is empty or invalid, will show this text */
  inValidText?: string;
}

export const DateTime: React.FC<DateTimeProps> = (props: DateTimeProps) => {
  const { children, value, inValidText } = props;

  const dateTime = getDateTime(value || children);

  if (!dateTime) {
    return <>{inValidText}</>;
  }
  return <>{format(dateTime, props.format || '')}</>;
};

DateTime.defaultProps = {
  inValidText: 'Invalid Date',
  format: 'yyyy-MM-dd HH:mm:ss',
};

export default DateTime;
