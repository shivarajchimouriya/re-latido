const YEAR_IN_EPOCH = 31556952000;

export const IsotoEpoch = (date: string): number => {
  const dateFormate = new Date(date);
  return dateFormate.getTime();
};

export const DateDifference = (date: string): number => {
  const dateFormate = new Date(date);
  return Date.now() - dateFormate.getTime();
};

export const IsoToAge = (date: string): number => {
  const dateFormate = new Date(date);
  return Math.ceil(dateFormate.getTime() / YEAR_IN_EPOCH) - 10;
};

export const EpochToRedable = (date: number): string => {
  const miliInYear = 3.154e10,
    miliInMonth = 2.628e9,
    miliInWeek = 6.048e8,
    miliInDay = 8.64e7,
    dateModeling = [
      {
        date: Math.floor(date / miliInYear),
        label: 'Year',
      },
      {
        date: Math.floor(date / miliInMonth),
        label: 'Month',
      },
      {
        date: Math.floor(date / miliInWeek),
        label: 'Week',
      },
      {
        date: Math.ceil(date / miliInDay),
        label: 'Day',
      },
    ],
    converter = dateModeling?.find(
      (item: typeof dateModeling[number]) => item?.date > 0,
    );

  return !!converter
    ? `${converter?.date} ${
        converter && converter?.date > 1
          ? converter?.label + 's'
          : converter?.label
      }`
    : 'Loading ...';
};

export function dateDifference(deliveryDate: string, today: string) {
  const date2: Date = deliveryDate ? new Date(deliveryDate) : new Date();
  const date1: Date = new Date(today);
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  if (date2 !== undefined) {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(
      date1.getFullYear(),
      date1.getMonth(),
      date1.getDate()
    );
    const utc2 = Date.UTC(
      date2.getFullYear(),
      date2.getMonth(),
      date2.getDate()
    );

    const value = Math.floor((utc2 - utc1) / _MS_PER_DAY);
    return value < 0 ? 0 : value;
  } else {
    return 0;
  }
}
