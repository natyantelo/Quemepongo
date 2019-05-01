import { Router, Request, Response } from "express";

import JwtAux from "../global/jwt";
import { badParamsResponse, internalErrorResponse } from "../global/error";
import UserService from "../db/service/userService";
import { userInterface } from "../classes/types/user.type";
const error_1 = require("../global/error");

const UserRouter = Router();
const Joi = require('joi');
const userService = new UserService();

/**
 * Parametros obligatorios:
 * --nombre: string, longitud minima 3, longitud maxima 100
 * --clave: string, longitud minima 3, longitud maxima 100
 * --email: string, longitud maxima 3, tipo email
 * Parametros Opcionales:
 * --apellid: string, longitud minima 3, longitud maxima 100
 */
UserRouter.put('/create', (req: Request, res: Response) => {

    /**
     * Validacion del body
     */
    const schema = {
        nombre: Joi.string().min(3).max(100).required(),
        apellido: Joi.string().min(3).max(100),
        clave: Joi.string().min(3).max(100).required(),
        email: Joi.string().max(100).email().required()
    };

    const result = Joi.validate(req.body, schema);

    if (result.error)
        return badParamsResponse(res);

    /**
     * Creacion de usuario
     */
    userService.insertUser({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        clave: req.body.clave,
        email: req.body.email
    }).then((user: userInterface) => {

        /**
         * Si se creo el usuario correctamente
         */
        return res.status(200).json({
            ok: true,
            user: user,
        });

    }).catch((err) => {

        /**
         * Si el email ya esta en uso
         */
        if (err === 400)
            return badParamsResponse(res);

        console.log(err);
        return internalErrorResponse(res);
    });
});

/**
 * Parametros obligatorios:
 * --clave: string, longitud minima 3, longitud maxima 100
 * --email: string, longitud maxima 3, tipo email
 */
UserRouter.post('/login', (req: Request, res: Response) => {

    /**
     * Validacion del body
     */
    const schema = {
        email: Joi.string().max(100).email().required(),
        clave: Joi.string().min(3).max(100).required()
    };

    const result = Joi.validate(req.body, schema);

    if (result.error)
        return badParamsResponse(res);

    userService.login(req.body.email, req.body.clave).then(response => {

        res.status(200).json(response);

    }).catch((err) => {

        if (err === 400)
            return badParamsResponse(res);

        console.log(err);
        return internalErrorResponse(res);
    });

});

/**
 * Decodifica un token de session y verifica devuelve el usuario decodificado si es valido.
 * Parametros obligatorios:
 * --token: string
 */

//LOGIN
UserRouter.post('/decode', [JwtAux.instance.verifyToken], (req: Request, res: Response) => {

    res.status(200).json({
        ok: true,
        // @ts-ignore
        user: req.user
    });
});

UserRouter.post('/login', (req, res) => {
    /**
     * Validacion del body
     */
    const schema = {
        email: Joi.string().max(100).email().required(),
        password: Joi.string().min(3).max(100).required()

    };
    const result = Joi.validate(req.body, schema);
    if (result.error)
        return error_1.badParamsResponse(res);
    userService.login(req.body.email, req.body.clave).then(response => {
        res.status(200).json(response);
    }).catch((err) => {
        if (err === 400)
            return error_1.badParamsResponse(res);
        console.log(err);
        return error_1.internalErrorResponse(res);
    });
});
// REGISTRO

UserRouter.put('/create', (req, res) => {
    /**
     * Validacion del body
     */
    const schema = {
        nombre: Joi.string().min(3).max(100).required(),
        apellido: Joi.string().min(3).max(100),
        clave: Joi.string().min(3).max(100).required(),
        email: Joi.string().max(100).email().required()
    };
    const result = Joi.validate(req.body, schema);
    if (result.error)
        return error_1.badParamsResponse(res);
    /**
     * Creacion de usuario
     */
    userService.insertUser({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        clave: req.body.clave,
        email: req.body.email
    }).then((user) => {
        /**
         * Si se creo el usuario correctamente
         */
        return res.status(200).json({
            ok: true,
            user: user,
        });
    }).catch((err) => {
        /**
         * Si el email ya esta en uso
         */
        if (err === 400)
            return error_1.badParamsResponse(res);
        console.log(err);
        return error_1.internalErrorResponse(res);
    });
});
/**
 * Parametros obligatorios:
 * --clave: string, longitud minima 3, longitud maxima 100
 * --email: string, longitud maxima 3, tipo email
 */
UserRouter.post('/login', (req, res) => {
    /**
     * Validacion del body
     */
    const schema = {
        password: Joi.string().min(3).max(100).required(),
        email: Joi.string().max(100).email().required()
    };
    const result = Joi.validate(req.body, schema);
    if (result.error)
        return error_1.badParamsResponse(res);
    userService.login(req.body.email, req.body.clave).then(response => {
        res.status(200).json(response);
    }).catch((err) => {
        if (err === 400)
            return error_1.badParamsResponse(res);
        console.log(err);
        return error_1.internalErrorResponse(res);
    });
});
export default UserRouter;
