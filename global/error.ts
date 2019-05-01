import  {Response} from "express";
import {BAD_PARAMS, BAD_PARAMS_CODE, INTERNAL_ERROR, INTERNAL_ERROR_CODE} from "./enviroment";

export const errorResponse = (res: Response, status: number, description: string) => {
  return res.status(status).json({
      ok: false,
      description
  })
};

export const internalErrorResponse = (res: Response) => {
  return errorResponse(res, INTERNAL_ERROR_CODE,INTERNAL_ERROR);
};

export const badParamsResponse = (res: Response) => {
    return errorResponse(res, BAD_PARAMS_CODE,BAD_PARAMS);
};