import { NextFunction, Request, Response } from "express";
import { database } from "../models/connection";

interface ICreateDelegatePayload {
  delegateTitle: string;
  delegateFName: string;
  delegateLName: string;
  delegateStreet: string;
  delegateCity: string;
  delegateState: string;
  delegateZipCode: string;
  attTelNo: string;
  attFaxNo: string;
  attEmailAddress: string;
  clientNo: number;
}

const createDelegateValidation = (body: ICreateDelegatePayload) => {
  if (!body.delegateTitle) {
    return {
      success: false,
      message: "Delegate title required",
    };
  }

  if (!body.delegateFName) {
    return {
      success: false,
      message: "Delegate first name required",
    };
  }

  if (!body.delegateLName) {
    return {
      success: false,
      message: "Delegate last name required",
    };
  }

  if (!body.delegateStreet) {
    return {
      success: false,
      message: "Delegate street required",
    };
  }

  if (!body.delegateCity) {
    return {
      success: false,
      message: "Delegate city required",
    };
  }

  if (!body.delegateState) {
    return {
      success: false,
      message: "Delegate state required",
    };
  }

  if (!body.delegateZipCode) {
    return {
      success: false,
      message: "Delegate zip code required",
    };
  }

  if (!body.attTelNo) {
    return {
      success: false,
      message: "Delegate telephone number required",
    };
  }

  if (!body.attFaxNo) {
    return {
      success: false,
      message: "Delegate fax number required",
    };
  }

  if (!body.attEmailAddress) {
    return {
      success: false,
      message: "Delegate email address required",
    };
  }

  if (!body.clientNo) {
    return {
      success: false,
      message: "Client number required",
    };
  }

  return {
    success: true,
    message: "",
  };
};

export async function CreateDelegate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {
      delegateTitle,
      delegateFName,
      delegateLName,
      delegateStreet,
      delegateCity,
      delegateState,
      delegateZipCode,
      attTelNo,
      attFaxNo,
      attEmailAddress,
      clientNo,
    }: ICreateDelegatePayload = req.body;

    const validation = createDelegateValidation({
      delegateTitle,
      delegateFName,
      delegateLName,
      delegateStreet,
      delegateCity,
      delegateState,
      delegateZipCode,
      attTelNo,
      attFaxNo,
      attEmailAddress,
      clientNo,
    });
    if (!validation.success) {
      return res.status(200).json({
        success: false,
        message: validation.message,
      });
    }

    const connection = await database.connect();

    const query = `INSERT INTO Delegate (delegateTitle, delegateFName, delegateLName, delegateStreet, delegateCity, delegateState, delegateZipCode, attTelNo, attFaxNo, attEmailAddress, clientNo) VALUES (:delegateTitle, :delegateFName, :delegateLName, :delegateStreet, :delegateCity, :delegateState, :delegateZipCode, :attTelNo, :attFaxNo, :attEmailAddress, :clientNo)`;
    await connection.execute(query, {
      delegateTitle,
      delegateFName,
      delegateLName,
      delegateStreet,
      delegateCity,
      delegateState,
      delegateZipCode,
      attTelNo,
      attFaxNo,
      attEmailAddress,
      clientNo,
    });

    await connection.close();

    return res.status(201).json({ message: "Delegate created successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function GetDelegate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const delegateNo = parseInt(req.params.delegateNo);

    if (!delegateNo) {
      return res.status(200).json({
        success: false,
        message: "Invalid delegate No",
      });
    }

    const connection = await database.connect();

    const query = `SELECT * FROM Delegate WHERE delegateNo = :delegateNo`;
    const result = await connection.execute(query, [delegateNo]);
    if (result.rows.length === 0) {
      return res.status(200).json({
        success: false,
        message: `Delegate by id, ${delegateNo}, not found`,
      });
    }

    await connection.close();

    return res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    return next(error);
  }
}

export async function ListDelegates(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const connection = await database.connect();

    const query = `SELECT * FROM Delegate`;
    const result = await connection.execute(query);

    await connection.close();

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return next(error);
  }
}

export async function UpdateDelegate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const delegateNo = Number(req.params.id);
    if (!delegateNo) {
      return res.status(200).json({
        success: false,
        message: "Invalid delegate No",
      });
    }

    const {
      delegateTitle,
      delegateFName,
      delegateLName,
      delegateStreet,
      delegateCity,
      delegateState,
      delegateZipCode,
      attTelNo,
      attFaxNo,
      attEmailAddress,
      clientNo,
    }: ICreateDelegatePayload = req.body;
    const validation = createDelegateValidation({
      delegateTitle,
      delegateFName,
      delegateLName,
      delegateStreet,
      delegateCity,
      delegateState,
      delegateZipCode,
      attTelNo,
      attFaxNo,
      attEmailAddress,
      clientNo,
    });
    if (!validation.success) {
      return res.status(200).json({
        success: false,
        message: validation.message,
      });
    }

    const connection = await database.connect();

    const query = `UPDATE Delegate SET 
      delegateTitle = :delegateTitle,
      delegateFName = :delegateFName,
      delegateLName = :delegateLName,
      delegateStreet = :delegateStreet,
      delegateCity = :delegateCity,
      delegateState = :delegateState,
      delegateZipCode = :delegateZipCode,
      attTelNo = :attTelNo,
      attFaxNo = :attFaxNo,
      attEmailAddress = :attEmailAddress,
      clientNo = :clientNo
      WHERE delegateNo = :delegateNo`;
    await connection.execute(query, {
      delegateTitle,
      delegateFName,
      delegateLName,
      delegateStreet,
      delegateCity,
      delegateState,
      delegateZipCode,
      attTelNo,
      attFaxNo,
      attEmailAddress,
      clientNo,
      delegateNo,
    });

    await connection.close();

    return res.status(200).json({
      success: true,
      message: "Delegate updated successfully",
    });
  } catch (error) {
    return next(error);
  }
}

export async function DeleteDelegate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const delegateNo = Number(req.params.id);
    if (isNaN(delegateNo)) {
      return res.status(200).json({
        success: false,
        message: "Invalid delegate Number",
      });
    }

    const connection = await database.connect();

    const query = `DELETE FROM Delegate WHERE delegateNo = :delegateNo`;
    await connection.execute(query, [delegateNo]);

    await connection.close();

    return res.status(200).json({
      success: true,
      message: "Delegate deleted successfully",
    });
  } catch (error) {
    return next(error);
  }
}
