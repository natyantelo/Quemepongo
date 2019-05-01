import MysqlDB from "../mysqlDB";
import { userInterface } from "../../classes/types/user.type";
import { FieldInfo, MysqlError } from "mysql";

const bcrypt = require('bcrypt');

export default class UserDAO {

    /**
     * Crea un usuario
     * @param user el usuario a crear
     */
    public createUser(user: userInterface): Promise<any> {

        return new Promise<any>(((resolve, reject) => {

            user.clave = bcrypt.hashSync(user.clave, 10); // encriptacion de la contraseña

            MysqlDB.instance.query('INSERT INTO usuarios (nombre, apellido, clave, email) VALUES (?,?,?,?)', [
                user.nombre, user.apellido, user.clave, user.email
            ], (err: MysqlError | null, results?: any, fields?: FieldInfo[]) => {

                if (err)
                    return reject(err);

                return resolve(user);
            })
        }));
    }

    /**
     * Comprueba si existe un usuario dado un email.
     * @param email email del usuario a comprobar
     */
    public existUser(email: string): Promise<any> {

        return new Promise((resolve, reject) => {

            MysqlDB.instance.query('SELECT idusuario FROM usuarios WHERE email = ?', [email], (err: MysqlError | null, results?: any, fields?: FieldInfo[]) => {

                if (err)
                    return reject(err);

                if (results[0])
                    return resolve(true);

                return resolve(false);
            });
        });
    }

    /**
     * Devuelve un usuario a partir de un email
     * @param email el email
     */
    public getUser(email: string): Promise<any> {

        return new Promise<any>((resolve, reject) => {
            MysqlDB.instance.query('SELECT * FROM usuarios WHERE email = ?', [email], (err: MysqlError | null, results?: any, fields?: FieldInfo[]) => {

                if (err)
                    return reject(err);

                if (results[0]) {
                    const user: userInterface = {
                        id: results[0]['idusuarios'],
                        nombre: results[0]['nombre'],
                        apellido: results[0]['apellido'],
                        clave: results[0]['clave'],
                        email: results[0]['email']
                    };
                    return resolve(user);
                }
                return resolve(null);
            });
        });
    }

}
