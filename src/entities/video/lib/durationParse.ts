export const secondsToHMS = (duration: number): string => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;
  return `${hours != 0 ? isLessTen(hours)+":" : ''}${isLessTen(minutes)}:${isLessTen(seconds)}`;
};

const isLessTen = (number: number): string => {
  return number < 10 ? `0${number}` : `${number}`;
};
