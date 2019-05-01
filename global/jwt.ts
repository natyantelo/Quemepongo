import {SEMILLA} from "./enviroment";
import {NextFunction, Request, Response} from "express";
import {badParamsResponse} from "./error";

const jwt = require('jsonwebtoken');

export default class JwtAux {

    private static _instance: JwtAux;

    private constructor() {}

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    public createToken(user: any) {
        return jwt.sign({user},
                SEMILLA,
                {expiresIn: 14400}
            ); //4 horas
    }

    public verifyToken = (req:Request, res: Response, next: NextFunction) => {


        const body = req.body;

        if (!req.body.token) {
            return badParamsResponse(res);
        }

        jwt.verify( body.token, SEMILLA, (err: any, decoded: any) => {

            if (err) {
                return badParamsResponse(res);
            }
            // @ts-ignore
            req.user = decoded.user;
            next();
        });
    }
}
