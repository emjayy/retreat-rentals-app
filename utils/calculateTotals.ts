import { calculateDaysBetween } from "./calendar";
type BookingDetails = {
  checkIn: Date;
  checkOut: Date;
  price: number;
};

export const calculateTotals = ({
  checkIn,
  checkOut,
  price,
}: BookingDetails) => {
  const totalNights = calculateDaysBetween({ checkIn, checkOut });
  const subTotal = totalNights * price;
  const cleaningFee = 100;
  const serviceFee = 50;
  const tax = subTotal * 0.15;
  const orderTotal = subTotal + cleaningFee + serviceFee + tax;

  return { totalNights, subTotal, cleaningFee, serviceFee, tax, orderTotal };
};
