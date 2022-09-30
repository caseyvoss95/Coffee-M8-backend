// Dependencies
const express = require('express');
const ordersRouter = express.Router();
const { mongo, default: mongoose } = require('mongoose');
// const StarbucksDrinks = require('../models');

ordersRouter.use(express.static("Public"));

///////////////////////////
////////// INDEX //////////
///////////////////////////

// display page for coffee orders
ordersRouter.get("/", async (req, res) => {
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
        // send all coffee
        res.json(await Orders.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

/////////////////////////
////////// NEW //////////
/////////////////////////


// Export Sessions Router
module.exports = ordersRouter;