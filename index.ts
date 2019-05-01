import Server from "./classes/Server";
import bodyParser from 'body-parser';
import cors from 'cors';
import UserRouter from "./routes/user";
import MysqlDB from "./db/mysqlDB";
import PrendaRouter from "./routes/prenda";
import CategoriaRouter from "./routes/categoria";

const server = Server.instance;
const db = MysqlDB.instance;

//BodyParse - siempre antes de las rutas
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

//CORS
server.app.use(cors({ origin: true, credentials: true }));

//Rutas
server.app.use('/user', UserRouter);
server.app.use('/prenda', PrendaRouter);
server.app.use('/categoria', CategoriaRouter);

//Ejecucion
server.start(() => {
   console.log(`Servidor corriendo en el puerto ${server.port}`);
});
