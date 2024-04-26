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
