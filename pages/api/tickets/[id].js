import Ticket from "@/models/Ticket";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      const { id } = req.query;
      const ticketData = await req.body;
      const updateTicketData = await Ticket.findByIdAndUpdate(id, {
        ...ticketData,
      });
      return res.status(200).json({ message: "Ticket updated" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Error",
        err,
      });
    }
  }

  if (req.method === "GET") {
    const { id } = req.query;
    const foundTicket = await Ticket.findOne({ _id: id });
    return res.status(200).json({ foundTicket });
  }

  if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      await Ticket.findByIdAndDelete(id);
      return res.status(200).json({ message: "Ticket deleted" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Error",
        err,
      });
    }
  }
}
