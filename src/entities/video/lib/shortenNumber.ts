export const shortenNumber = (number: number): string => {
  if (number < 1000) {
    return String(number);
  }
  const suffixes = ["", "k", "M", "B", "T", "P", "E"];
  const index = Math.floor(Math.log10(number) / 3);
  return Math.floor(number / Math.pow(1000, index)) + suffixes[index];
};
