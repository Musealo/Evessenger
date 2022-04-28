import { getSession } from "next-auth/react";
import Room from "../../../Schema/Room";
import { connectDb } from "../../../utils/db";

export default async function handler(request, response) {
  try {
    connectDb();

    const session = await getSession({ req: request });

    if (!session) {
      return response.status(401).json({ error: "Not authenticated" });
    }
    switch (request.method) {
      case "GET":
        let rooms = await Room.find()
          .sort({ createdAt: -1 })
          .where({ userId: session.user.id });
        response.status(200).json(rooms);

        break;

      case "POST":
        if (session) {
          const createdRoom = await Room.create({
            ...request.body,
            userId: session.user.id,
            players: session.user.id,
            owner: session.user.id,
          });
          response.status(200).json({ success: true, data: createdRoom });
        } else {
          response.status(401).json({ error: "Not authenticated" });
        }
        break;

      default:
        response.status(405).json({ error: "Method not allowed" });
        break;
    }
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: error.message });
  }
}
