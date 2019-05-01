import mysql = require("mysql");

import { DB_HOST, DB_DATABASE, DB_PASSWORD, DB_USER } from '../global/enviroment';
import { Query, queryCallback, QueryFunction, QueryOptions, TypeCast } from "mysql";

console.log(DB_HOST, DB_DATABASE, DB_PASSWORD, DB_USER);

export default class MysqlDB {

    private static _instance: MysqlDB;
    public cnn: mysql.Pool;

    private constructor() {
        this.cnn = mysql.createPool({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_DATABASE,
            insecureAuth: true
        });
    }

    public query(options: string, values?: any, callback?: queryCallback) {
        return this.cnn.getConnection((err, connection) => {

            if (err) {
                console.log(err);
                return;
            }

            console.log('jose', options, values);
            connection.query(options, values, callback);
            connection.release();
        });
    }

    public static get instance(): MysqlDB {
        return this._instance || (this._instance = new this());
    }
}
