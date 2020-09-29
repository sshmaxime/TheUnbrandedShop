import * as express from 'express';
import sessionRouter from "./api/checkout/router";
import * as socketio from "socket.io";
import { Server } from "http";
import handlerStateItems from './api/state/item';
import * as Cors from "cors";

export class server {
  private app: express.Express;
  private server: Server
  private state: socketio.Server

  constructor() {
    this.app = express();
    this.server = new Server(this.app)
    this.state = socketio(this.server);
  }

  init = () => {
    this.app.use(express.json());
    this.app.use(Cors());

    this.initRoutes();
  }

  private initRoutes = () => {
    // http requests
    this.app.use("/checkout", sessionRouter);

    // socketio
    handlerStateItems(this.state);
  }

  start = (port: number) => {
    this.server.listen(port, () => {
      console.log("starting server");
    });
  }
}