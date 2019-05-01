import { Router, Request, Response } from "express";
import MysqlDB from "../db/mysqlDB";

import { MysqlError, FieldInfo } from "mysql";
import { request } from "https";
const CategoriaRouter = Router();

type TPrenda = {
    idprenda: number,
    foto: string
    titulo: string,
    descripcion: string,
    idtag: string
}

CategoriaRouter.get('/camisasyblusas', (req: Request, res: Response) => {
    MysqlDB.instance.query(
        'SELECT quemepongodb.prenda.foto, quemepongodb.prenda.titulo ,quemepongodb.prenda.descripcion FROM quemepongodb.prenda INNER JOIN quemepongodb.tag_prenda ON quemepongodb.prenda.idprenda=quemepongodb.tag_prenda.idprenda INNER JOIN quemepongodb.tag ON quemepongodb.tag.idtag=quemepongodb.tag_prenda.idtag;',
        null,
        (err: MysqlError | null, results?: TPrenda[], fields?: FieldInfo[]) => {
            if (!results) {
                res.send([]);
                return
            }
            // res.send(results.map(result => {
            //     return {
            //         idPrenda: result.idprenda,
            //         foto: result.foto
            //     }
            // }));

            res.send(results)
        }
    );
});

CategoriaRouter.get('/chaquetasyabrigos', (req: Request, res: Response) => {
    MysqlDB.instance.query(
        'SELECT * FROM quemepongodb.prenda;',
        null,
        (err: MysqlError | null, results?: TPrenda[], fields?: FieldInfo[]) => {
            if (!results) {
                res.send([]);
                return
            }
            res.send(results)


        });

});


export default CategoriaRouter;
