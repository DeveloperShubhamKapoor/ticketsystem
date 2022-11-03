const express = require("express");
const BookmarkModel = require("../../model/bookmark.model");
const bookmarkRouter = express.Router();

bookmarkRouter.post("/create", async (req, res) => {
  const bookmark = await BookmarkModel(req.body);
  bookmark.save();
  res.send(bookmark);
});

bookmarkRouter.get("/", async (req, res) => {
  const { userId } = req.body;
  const bookmark = await BookmarkModel.find({ userId });
  res.send({data:bookmark});
});

bookmarkRouter.get("/:id", async (req, res) => {
  const { userId } = req.body;
  const id = req.params.id;
  const bookmark = await BookmarkModel.find({ userId, _id: id });
  res.send(bookmark);
});

module.exports = bookmarkRouter