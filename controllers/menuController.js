const Menu = require("../models/menuModel");

exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.addMenuItem = async (req, res) => {
  const { name, description, price, category } = req.body;
  try {
    const newMenuItem = new Menu({ name, description, price, category });
    const menuItem = await newMenuItem.save();
    res.json(menuItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.updateMenuItem = async (req, res) => {
  const { name, description, price, category } = req.body;
  try {
    let menuItem = await Menu.findById(req.params.id);
    if (!menuItem) return res.status(404).json({ msg: "Menu item not found" });

    menuItem.name = name || menuItem.name;
    menuItem.description = description || menuItem.description;
    menuItem.price = price || menuItem.price;
    menuItem.category = category || menuItem.category;

    await menuItem.save();
    res.json(menuItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.deleteMenuItem = async (req, res) => {
  try {
    let menuItem = await Menu.findById(req.params.id);
    if (!menuItem) return res.status(404).json({ msg: "Menu item not found" });

    await menuItem.remove();
    res.json({ msg: "Menu item removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
