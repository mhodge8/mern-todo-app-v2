const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

// GET All Items, api/items
router.get("/", (req, res) => {
    Item.find()
    .sort({date: -1})
    .then( (items) => res.json(items))
    .catch( (err) => console.log(err));
});

// POST Create Item, api/items
router.post("/", (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
        .then( (item) => res.json(item));
});

// DELETE delete Item, api/items/:id
router.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then( (item) => item.remove()
            .then( () => res.json({success: true})))
            .catch(err => res.status(404).json({sucess: false}));
});



module.exports = router;