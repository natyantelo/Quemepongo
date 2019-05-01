import  {Router,Request,Response} from "express";
import {badParamsResponse, internalErrorResponse} from "../global/error";
import PrendaService from "../db/service/prendaService";
import {prendaInterface} from "../classes/types/prenda.type";
const Joi = require('joi');
const PrendaRouter = Router();
const prendaService = new PrendaService();
/**
 * Parametros obligatorios:
 * --titulo: string, longitud minima 3, longitud maxima 250
 * --descripcion: string, longitud minima 3, longitud maxima 250
 * Parametros Opcionales:
 * --img: string, longitud minima 3, longitud maxima 250
 */
PrendaRouter.put('/create', (req:Request,res:Response) => {

    /**
     * Validacion del body
     */
    const schwema = {
        titulo: Joi.string().min(3).max(250).required(),
        descripcion: Joi.string().min(3).max(250).required(),
        img: Joi.string().min(3).max(250)
    };

    const result = Joi.validate(req.body,schwema);

    if (result.error)
        return badParamsResponse(res);

    prendaService.insertPrenda({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        img: req.body.img? req.body.img : ''
    }).then( (prenda: prendaInterface) => {
        res.status(200).json({
            ok: true,
            prenda: prenda
        })
    }).catch(err => {
        if (err === 400)
            return badParamsResponse(res);

        console.log(err);
        return internalErrorResponse(res);
    })
});


export default PrendaRouter;
