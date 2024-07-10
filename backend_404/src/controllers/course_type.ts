import { NextFunction, Request, Response } from "express";
import { database } from "../models/connection";

export async function CreateCourseType(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const courseTypeDescription: string = req.body.courseTypeDescription;
    if (!courseTypeDescription) {
      return res.status(200).json({
        success: false,
        message: "Course type description required",
      });
    }

    const connection = await database.connect();

    const query = `INSERT INTO CourseType (courseTypeDescription) VALUES (:courseTypeDescription)`;
    await connection.execute(query, [courseTypeDescription]);

    await connection.close();

    return res.status(201).json({
      message: "CourseType created successfully",
    });
  } catch (error) {
    return next(error);
  }
}

export async function ListCourseTypes(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const connection = await database.connect();

    const query = `SELECT courseTypeNo, courseTypeDescription FROM CourseType`;
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
