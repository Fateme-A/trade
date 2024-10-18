
export const toEnglishNumber = (s: string | number | undefined): string =>
  `${s}`.replace(/[۰-۹]/g, (d) => `${'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)}`);

export const formatCurrency = (amount: number | string | undefined): string => {
  if (!amount) return '0';
  let parsedAmount: number;

  if (typeof amount === "string") {
    parsedAmount = Number(amount);
  } else {
    parsedAmount = Number(amount);
  }

  return parsedAmount.toLocaleString();
};

