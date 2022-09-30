// Dependencies
const express = require('express');
const ordersRouter = express.Router();
const { mongo, default: mongoose } = require('mongoose');
const StarbucksDrinks = require('../models/starbucksDrink');

ordersRouter.use(express.static("Public"));

///////////////////////////
////////// INDEX //////////
///////////////////////////

// display page for coffee orders
ordersRouter.get("/allDrinks", async (req, res) => {
    try {
        // send all coffee
        res.json(await StarbucksDrinks.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// coffee order index (current and prior orders)
ordersRouter.get("/allOrders", async (req, res) => {
    try {
        // send all coffee order
        res.json(await Order.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

/////////////////////////
////////// NEW //////////
/////////////////////////

app.post("/allDrinks", async (req, res) => {
    try {
        // create starbucks drink
        res.json(await StarbucksDrinks.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

app.post("/allOrders", async (req, res) => {
    try {
        // create starbucks drink
        res.json(await StarbucksDrinks.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

////////////////////////////
////////// UPDATE //////////
////////////////////////////


// Export Sessions Router
module.exports = ordersRouter;