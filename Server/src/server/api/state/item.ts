import * as socketio from "socket.io";
import { db } from "../../../db/db";
import { item } from "../../../models/item";

const handlerStateItems = (socketio: socketio.Server) => {
  handlerItems(socketio);

  db.subscribeChangesItems((item: item) => { socketio.emit("ITEM", item); });
}

const handlerItems = (socketio: socketio.Server) => {
  socketio.on("connect", async (socket: socketio.Socket) => { socket.emit("ITEMS", await db.getItems()) })
  socketio.on("disconnect", async (socket: socketio.Socket) => { })
}

export default handlerStateItems;