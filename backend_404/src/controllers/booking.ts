import { NextFunction, Request, Response } from "express";

export async function CreateBooking(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "Booking created successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function GetBooking(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "Booking read successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function ListBookings(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Bookings listed successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function UpdateBooking(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Booking updated successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function DeleteBooking(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    return next(error);
  }
}
