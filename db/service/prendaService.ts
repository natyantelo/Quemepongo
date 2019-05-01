import prendaDAO from "../dao/prendaDAO";
import {prendaInterface} from "../../classes/types/prenda.type";

const bcrypt = require('bcrypt');

export default class PrendaService {

    private prendaDao = new prendaDAO();

    /**
     * Inserta una prenda.
     * @param prenda la prenda
     */
    public insertPrenda(prenda: prendaInterface): Promise<any> {

        return new Promise<any>((resolve, reject) => {
            this.prendaDao.createPrenda(prenda)
                .then((prenda: prendaInterface) => resolve(prenda))
                .catch(err => reject(err))
        });
    }
}
