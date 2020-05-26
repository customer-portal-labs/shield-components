import isDate from 'date-fns/isDate';
import isValid from 'date-fns/isValid';

export const getDateTime = (val?: string | Date | number): Date | null => {
  if (!val) {
    return null;
  }

  if (isDate(val)) {
    return val as Date;
  }

  try {
    const datetime = new Date(val);
    if (isValid(datetime)) {
      return datetime;
    }
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(error);
    }
  }
  return null;
};
