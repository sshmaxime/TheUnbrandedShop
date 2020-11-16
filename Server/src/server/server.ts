import * as express from 'express';
import sessionRouter from "./api/checkout/router";
import * as socketio from "socket.io";
import { Server } from "http";
import handlerStateItems from './api/state/item';
import * as Cors from "cors";
import config from '../config';

export class myServer {
  ready: Promise<any>

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

  start = () => {
    this.server.listen(config.PORT, () => {
      console.log("starting server");
    });
  }
}

export const server = new myServer()