import { NextFunction, Request, Response } from "express";
import { database } from "../models/connection";

export async function CreateClient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const clientName: string = req.body.clientName;
    if (!clientName) {
      return res.status(200).json({
        success: false,
        message: "Client name required",
      });
    }

    const connection = await database.connect();

    const query = `INSERT INTO Client (clientName) VALUES (?)`;
    await connection.execute(query, [clientName]);

    return res.status(201).json({
      success: true,
      message: "Client created successfully",
    });
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
    const connection = await database.connect();

    const query = `SELECT clientNo, clientName FROM Client`;
    const result = await connection.execute(query);

    await connection.close();

    return res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    return next(error);
  }
}
