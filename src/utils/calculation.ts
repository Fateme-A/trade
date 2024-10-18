import type { IOrder } from "@/types/market.model";
import { Decimal } from "decimal.js";
import { formatCurrency } from "./string";

export const calculateTransactionSummary = (
  orders: IOrder[],
  percentage: number
) => {
  // Step 1: Calculate total remain for the list
  const totalRemain = orders.reduce(
    (sum, order) => sum.add(order.remain),
    new Decimal(0)
  );

  // Step 2: Calculate the target remain based on the percentage input
  const targetRemain = totalRemain.mul(percentage).div(100);

  // Step 3: Initialize variables for total remain, total value, and total weighted price
  let accumulatedRemain = new Decimal(0);
  let totalWeightedPrice = new Decimal(0);
  let totalValue = new Decimal(0);

  for (const order of orders) {
    const orderRemain = new Decimal(order.remain);
    const orderPrice = new Decimal(order.price);
    const orderValue = new Decimal(order.value);

    if (accumulatedRemain.add(orderRemain).lte(targetRemain)) {
      accumulatedRemain = accumulatedRemain.add(orderRemain);
      totalWeightedPrice = totalWeightedPrice.add(orderPrice.mul(orderRemain));
      totalValue = totalValue.add(orderValue.mul(orderRemain));
    } else {
      // If the remain exceeds the target, take only part of the current order
      const remainingToFill = targetRemain.sub(accumulatedRemain);
      accumulatedRemain = accumulatedRemain.add(remainingToFill);
      totalWeightedPrice = totalWeightedPrice.add(
        orderPrice.mul(remainingToFill)
      );
      totalValue = totalValue.add(orderValue.mul(remainingToFill));
      break; // We've reached the target remain, no need to continue
    }
  }

  // Step 4: Calculate the weighted average price
  const weightedAveragePrice = totalWeightedPrice.div(accumulatedRemain);

  return {
    totalRemain: formatCurrency(+accumulatedRemain),
    averagePrice: formatCurrency(+weightedAveragePrice),
    totalPayable: formatCurrency(+totalValue),
  };
};

export const calculateWeightedMean = (orders: IOrder[]): number | null => {
  // Initialize sums for weighted prices and weights
  let weightedSum = 0;
  let totalWeight = 0;

  for (const order of orders) {
    const amount = parseFloat(order.amount || "0");
    const price = parseFloat(order.price || "0");

    // Accumulate weighted sum and total weight
    weightedSum += price * amount; // Weighted price
    totalWeight += amount; // Total weight
  }

  // Calculate the weighted mean
  return totalWeight > 0 ? weightedSum / totalWeight : 0; // Avoid division by zero
};

export const getOrderSums = (displayedOrders: IOrder[]): IOrder => {
  const remainSum = displayedOrders
    .reduce((acc, order) => acc + (parseFloat(order.remain) || 0), 0)
    .toFixed(2);

  const valueSum = displayedOrders
    .reduce((acc, order) => acc + (parseFloat(order.value) || 0), 0)
    .toFixed(2);

  const priceSum = calculateWeightedMean(displayedOrders)?.toFixed(2) || "";

  return {
    remain: remainSum,
    value: valueSum,
    price: priceSum,
  };
};
