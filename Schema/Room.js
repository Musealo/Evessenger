import { Schema, model } from "mongoose";
import "./User";

const RoomSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    roommember: [{ type: Schema.Types.ObjectId }],
  },
  { timestamps: true }
);

export default model("Room", RoomSchema, "rooms", { overwriteModels: true });
