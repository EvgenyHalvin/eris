import { format } from 'date-fns';

export const getMMMddyyyy = (date: Date) => {
  return format(date, 'MMM dd, yyyy');
};
