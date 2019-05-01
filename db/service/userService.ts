import { userInterface } from "../../classes/types/user.type";
import UserDAO from "../dao/userDAO";
import JwtAux from "../../global/jwt";

const bcrypt = require('bcrypt');

export default class UserService {

    private userDao = new UserDAO();

    /**
     * Inserta un usario siempre y cuando el email no este repetido.
     * @param user el usuario a insertar
     */
    public insertUser(user: userInterface): Promise<any> {

        return new Promise<any>((resolve, reject) => {

            this.userDao.existUser(user.email).then((exist: boolean) => {

                if (exist)
                    return reject(400);

                return this.userDao.createUser(user);
            }).then((user: userInterface) => resolve(user))
                .catch(err => reject(err))
        })
    }

    /**
     * Verifica las credenciales de usuario y genera el token de sesion si son correctas
     * @param email el email del usuario
     * @param clave la clave de usuario
     */
    public login(email: string, clave: string): Promise<any> {

        return new Promise<any>((resolve, reject) => {

            this.userDao.getUser(email).then((user: userInterface | null) => {

                if (user === null || !bcrypt.compareSync(clave, user.clave)) {
                    return resolve({
                        ok: true,
                        user: {}
                    });
                }
                delete user.clave;
                return resolve({
                    ok: true,
                    user: user,
                    token: JwtAux.instance.createToken(user)
                });

            }).then(err => {
                reject(err);
            });
        });
    }
}
