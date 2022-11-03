const express = require("express");
const TicketModel = require("../../model/tickets.model");
const ticketRouter = express.Router();

ticketRouter.post("/create", async (req, res) => {
    let newDate = new Date();
    let year  = newDate.getFullYear()
    let month = newDate.getMonth()
    let todaysDate = newDate.getDate()
    let date = todaysDate+"/"+month+"/"+year
    const ticket = await TicketModel({...req.body,date});
    ticket.save();
    res.send(ticket);
});

ticketRouter.get("/", async (req, res) => {
  const { userId } = req.body;
  const ticket = await TicketModel.find({ userId });
  res.send({data:ticket});
});

ticketRouter.get("/:id", async (req, res) => {
  const { userId } = req.body;
  const id = req.params.id;
  const ticket = await TicketModel.find({ userId, _id: id });
  res.send(ticket);
});

module.exports = ticketRouter