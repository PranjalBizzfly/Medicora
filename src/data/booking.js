// Shared by the booking form and /api/book so both agree on clinic hours.
// Mon–Sat, morning and evening sessions (IST). Sundays closed.
export const SLOTS = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];
export const CLOSED_WEEKDAYS = [0];
export const BOOKING_WINDOW_DAYS = 60;
