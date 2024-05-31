import { AccountTableType } from '../models/InfoTypes';

const calculateProfit = (
  assets: string,
  payments: string
): AccountTableType['profit'] => {
  const assetsNum = Number(assets);
  const paymentsNum = Number(payments);
  if (assetsNum === paymentsNum) {
    return 'equal';
  }
  if (assetsNum > paymentsNum) {
    return 'up';
  }
  return 'down';
};

export { calculateProfit };
