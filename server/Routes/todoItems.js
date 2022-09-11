const router = require("express").Router();

const todoItemsModel = require("../models/todoitems");

// add new item
router.post("/api/item", async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      item: req.body.item,
    });
    const saveItem = await newItem.save();
    res.status(200).json(saveItem);
  } catch (err) {
    res.json(err);
  }
});

// get all items
router.get("/api/items", async (req, res) => {
  try {
    const allTodoItems = await todoItemsModel.find({});
    res.status(200).json(allTodoItems);
  } catch (err) {
    res.json(err);
  }
});

// update items
router.put("/api/item/:id", async (req, res) => {
  try {
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updateItem);
  } catch (err) {
    res.json(err);
  }
});

// delete item
router.delete("/api/item/:id", async (req, res) => {
  try {
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Item deleted");
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
