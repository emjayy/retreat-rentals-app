import { DateRange } from "react-day-picker";
import { Booking } from "@/utils/types";

export const defaultSelected: DateRange = {
  from: undefined,
  to: undefined,
};

export const generateBlockedPeriods = ({
  bookings,
  today,
}: {
  bookings: Booking[];
  today: Date;
}) => {
  today.setHours(0, 0, 0, 0); // Set the time to 00:00:00.000

  // Generate an array of DateRange objects representing the booked dates for Shadcn Calendar
  const disabledDays: DateRange[] = [
    ...bookings.map((booking) => ({
      from: booking.checkIn,
      to: booking.checkOut,
    })),
    {
      from: new Date(0), // This is 01 January 1970 00:00:00 UTC.
      to: new Date(today.getTime() - 24 * 60 * 60 * 1000), // This is yesterday.
    },
  ];
  return disabledDays;
};

export function calculateDaysBetween({
  checkIn,
  checkOut,
}: {
  checkIn: Date;
  checkOut: Date;
}) {
  // Calculate the difference in milliseconds
  const diffInMs = Math.abs(checkOut.getTime() - checkIn.getTime());

  // Convert the difference in milliseconds to days
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return diffInDays;
}
