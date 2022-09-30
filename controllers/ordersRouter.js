// Dependencies
const express = require('express');
const ordersRouter = express.Router();
const { mongo, default: mongoose } = require('mongoose');
const StarbucksDrinks = require('../models/starbucksDrink');
const Orders = require('../models/order');
const Users = require('../models/user');

ordersRouter.use(express.static("Public"));

///////////////////////////
////////// INDEX //////////
///////////////////////////

// User API
ordersRouter.get("/allUsers", async (req, res) => {
    try {
        // send all coffee order
        res.json(await Users.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Order API
ordersRouter.get("/allOrders", async (req, res) => {
    try {
        // send all coffee order
        res.json(await Orders.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Product/Drink API
ordersRouter.get("/allDrinks", async (req, res) => {
    try {
        // send all coffee
        res.json(await StarbucksDrinks.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});



/////////////////////////
////////// NEW //////////
/////////////////////////
ordersRouter.post("/allUsers", async (req, res) => {
    try {
        // create starbucks drink
        res.json(await Users.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});
ordersRouter.post("/allOrders", async (req, res) => {
    try {
        // create starbucks drink
        res.json(await Orders.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

ordersRouter.post("/allDrinks", async (req, res) => {
    try {
        // create starbucks drink
        res.json(await StarbucksDrinks.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});


////////////////////////////
////////// DELETE //////////
////////////////////////////
ordersRouter.delete("/allDrinks/:id", async (req, res) => {
    try{
        // send all orders
        res.json(await StarbucksDrinks.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
})


////////////////////////////
////////// UPDATE //////////
////////////////////////////


// Export Sessions Router
module.exports = ordersRouter;