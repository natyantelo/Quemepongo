import MysqlDB from "../mysqlDB";
import { FieldInfo, MysqlError } from "mysql";
import { prendaInterface } from "../../classes/types/prenda.type";

const bcrypt = require('bcrypt');

export default class UserDAO {

    /**
     * Crea una prenda
     * @param user la prenda a crear
     */
    public createPrenda(prenda: prendaInterface): Promise<any> {

        return new Promise<any>(((resolve, reject) => {

            MysqlDB.instance.query('INSERT INTO prendas (titulo, descripcion, img) VALUES (?,?,?)', [
                prenda.titulo, prenda.descripcion, prenda.img
            ], (err: MysqlError | null, results?: any, fields?: FieldInfo[]) => {

                if (err)
                    return reject(err);

                return resolve(prenda);
            })
        }));
    }

    /**
     * Comprueba si existe una prenda dada una id
     * @param email email del usuario a comprobar
     */
    public existUser(id: number): Promise<any> {

        return new Promise((resolve, reject) => {

            MysqlDB.instance.query('SELECT id FROM prendas WHERE id = ?', [id], (err: MysqlError | null, results?: any, fields?: FieldInfo[]) => {

                if (err)
                    return reject(err);

                if (results[0])
                    return resolve(true);

                return resolve(false);
            });
        });
    }

    /**
     * Devuelve una prenda a partir de un id
     * @param email el email
     */
    public getPrenda(id: number): Promise<any> {

        return new Promise<any>((resolve, reject) => {
            MysqlDB.instance.query('SELECT * FROM prendas WHERE id = ?', [id], (err: MysqlError | null, results?: any, fields?: FieldInfo[]) => {

                if (err)
                    return reject(err);

                if (results[0]) {
                    const prenda: prendaInterface = {
                        id: results[0]['id'],
                        titulo: results[0]['titulo'],
                        descripcion: results[0]['descripcion'],
                        img: results[0]['img'],
                    };
                    return resolve(prenda);
                }
                return resolve(null);
            });
        });
    }

}
