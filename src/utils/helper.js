export const getLtv = (houseValue, mortgage) => {
  return Math.round(100 / (houseValue / mortgage));
};