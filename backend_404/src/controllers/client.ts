import { NextFunction, Request, Response } from "express";

export async function CreateClient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "Client created successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function GetClient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "Client read successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function ListClients(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Clients listed successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function UpdateClient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Client updated successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function DeleteClient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Client deleted successfully" });
  } catch (error) {
    return next(error);
  }
}
