import _ from "lodash";

export const thousandFormat = (x: string) => {
  let formatted;

  if (!_.isEmpty(x) && x[0] === "0" && x.length === 1) {
    return (formatted = x);
  } else if (!_.isEmpty(x) && x[0] === "0") {
    formatted = x
      .toString()
      // .replace(/^0/, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    formatted = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return formatted;
};

export const formatAmount = (x: number) => {
  let digit;
  if (isNaN(x)) {
    digit = 0;
  } else {
    digit = x;
  }
  return thousandFormat(Number(digit ?? 0).toFixed(2));
};
