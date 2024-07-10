import { NextFunction, Request, Response } from "express";
import { database } from "../models/connection";

interface ICreateCoursePayload {
  courseName: string;
  courseDescription: string;
  startDate: Date;
  startTime: Date;
  endDate: Date;
  endTime: Date;
  maxDelegates: number;
  confirmed: string;
  delivererEmployeeNo: number;
  courseTypeNo: number;
}

const CreateCourseValidation = (body: ICreateCoursePayload) => {
  if (!body.courseName) {
    return {
      success: false,
      message: "Course name required",
    };
  }

  if (!body.courseDescription) {
    return {
      success: false,
      message: "Course description required",
    };
  }

  if (!body.startDate) {
    return {
      success: false,
      message: "Start date required",
    };
  }

  if (!body.startTime) {
    return {
      success: false,
      message: "Start time required",
    };
  }

  if (!body.endDate) {
    return {
      success: false,
      message: "End date required",
    };
  }

  if (!body.endTime) {
    return {
      success: false,
      message: "End time required",
    };
  }

  if (!body.maxDelegates) {
    return {
      success: false,
      message: "Max delegates required",
    };
  }

  if (!body.confirmed) {
    return {
      success: false,
      message: "Confirmed required",
    };
  }

  if (!body.delivererEmployeeNo) {
    return {
      success: false,
      message: "Deliverer employee no required",
    };
  }

  if (!body.courseTypeNo) {
    return {
      success: false,
      message: "Course type no required",
    };
  }

  return {
    success: true,
    message: "",
  };
};

export async function CreateCourse(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {
      courseName,
      courseDescription,
      startDate,
      startTime,
      endDate,
      endTime,
      maxDelegates,
      confirmed,
      delivererEmployeeNo,
      courseTypeNo,
    }: ICreateCoursePayload = req.body;

    const validation = CreateCourseValidation({
      courseName,
      courseDescription,
      startDate,
      startTime,
      endDate,
      endTime,
      maxDelegates,
      confirmed,
      delivererEmployeeNo,
      courseTypeNo,
    });

    if (!validation.success) {
      return res.status(200).json({
        success: false,
        message: validation.message,
      });
    }

    const connection = await database.connect();

    const query = `INSERT INTO Course (courseName, courseDescription, startDate, startTime, endDate, endTime, maxDelegates, confirmed, delivererEmployeeNo, courseTypeNo) VALUES (:courseName, :courseDescription, :startDate, :startTime, :endDate, :endTime, :maxDelegates, :confirmed, :delivererEmployeeNo, :courseTypeNo)`;
    await connection.execute(query, [
      courseName,
      courseDescription,
      startDate,
      startTime,
      endDate,
      endTime,
      maxDelegates,
      confirmed,
      delivererEmployeeNo,
      courseTypeNo,
    ]);

    await connection.close();

    return res.status(201).json({
      success: true,
      message: "Course created successfully",
    });
  } catch (error) {
    return next(error);
  }
}

export async function GetCourse(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(200).json({
        success: false,
        message: "Invalid course ID",
      });
    }

    const connection = await database.connect();

    const query = `SELECT courseNo, courseName, courseDescription, startDate, startTime, endDate, endTime, maxDelegates, confirmed, delivererEmployeeNo, courseTypeNo FROM Course WHERE courseNo = :id`;
    const result = await connection.execute(query, [id]);
    if (result.rows.length === 0) {
      return res.status(200).json({
        success: false,
        message: `Course by id, ${id}, not found`,
      });
    }

    await connection.close();

    return res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    return next(error);
  }
}

export async function ListCourses(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const connection = await database.connect();

    const query = `SELECT courseNo, courseName, courseDescription, startDate, startTime, endDate, endTime, maxDelegates, confirmed, delivererEmployeeNo, courseTypeNo FROM Course`;
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

export async function UpdateCourse(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const courseNo = Number(req.params.id);
    if (isNaN(courseNo)) {
      return res.status(200).json({
        success: false,
        message: "Invalid course ID",
      });
    }

    const {
      courseName,
      courseDescription,
      startDate,
      startTime,
      endDate,
      endTime,
      maxDelegates,
      confirmed,
      delivererEmployeeNo,
      courseTypeNo,
    }: ICreateCoursePayload = req.body;

    const validation = CreateCourseValidation({
      courseName,
      courseDescription,
      startDate,
      startTime,
      endDate,
      endTime,
      maxDelegates,
      confirmed,
      delivererEmployeeNo,
      courseTypeNo,
    });
    if (!validation.success) {
      return res.status(200).json({
        success: false,
        message: validation.message,
      });
    }

    const connection = await database.connect();

    const query = `UPDATE Course SET 
      courseName = :courseName,
      courseDescription = :courseDescription,
      startDate = :startDate,
      startTime = :startTime,
      endDate = :endDate,
      endTime = :endTime,
      maxDelegates = :maxDelegates,
      confirmed = :confirmed,
      delivererEmployeeNo = :delivererEmployeeNo,
      courseTypeNo = :courseTypeNo
      WHERE courseNo = :courseNo`;

    await connection.execute(query, [
      courseName,
      courseDescription,
      startDate,
      startTime,
      endDate,
      endTime,
      maxDelegates,
      confirmed,
      delivererEmployeeNo,
      courseTypeNo,
      courseNo,
    ]);

    await connection.close();

    return res.status(200).json({
      success: true,
      message: "Course updated successfully",
    });
  } catch (error) {
    return next(error);
  }
}

export async function DeleteCourse(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const courseNo = Number(req.params.id);
    if (isNaN(courseNo)) {
      return res.status(200).json({
        success: false,
        message: "Course Number required",
      });
    }

    const connection = await database.connect();

    const query = `DELETE FROM Course WHERE courseNo = :courseNo`;
    await connection.execute(query, { courseNo });

    await connection.close();

    return res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    return next(error);
  }
}
