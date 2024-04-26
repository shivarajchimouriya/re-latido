export const CommaSeprator = (value: number) => {
  return value?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const CommaRemover = (value: string) => {
  console.log(value);
  return parseInt(value.replace(/,/g, ""), 10);
};
