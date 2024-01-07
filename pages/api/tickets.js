// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Ticket from "@/models/Ticket";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const tickets = await Ticket.find();

      return res.status(200).json({ tickets });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error", err });
    }
  }

  if (req.method === "POST") {
    try {
      const ticketData = await req.body;
      console.log("Post TicketData: ", ticketData);

      await Ticket.create(ticketData);
      return res.status(201).json({ message: "Ticket Created" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error", err });
    }
  }
}
