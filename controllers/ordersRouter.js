// Dependencies
const express = require('express');
const ordersRouter = express.Router();
const { mongo, default: mongoose } = require('mongoose');
const StarbucksDrinks = require('../models/starbucksDrink');
const Orders = require('../models/order');
const Users = require('../models/user');
const CustomizedDrinks = require('../models/customizedDrink')

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
        // create user
        res.json(await Users.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});
ordersRouter.post("/allOrders", async (req, res) => {
    try {
        // create order
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
////////// UPDATE //////////
////////////////////////////

ordersRouter.put("/allUsers/:id", async (req, res) => {
    try {
        // find user and update
        res.json(
            await Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

ordersRouter.put("/allOrders/:id/addCustomizedDrink", async (req, res) => {
    try {
        // Update Order with User Created Drink!!!!
        res.json(
            await Orders.findByIdAndUpdate(req.params.id, { $push: { "groupOrder": req.body } }, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

ordersRouter.put("/allOrders/:id", async (req, res) => {
    try {
        // find user and update
        res.json(
            await Orders.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

ordersRouter.put("/allDrinks/:id", async (req, res) => {
    try {
        // find user and update
        res.json(
            await StarbucksDrinks.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});


// Export Sessions Router
module.exports = ordersRouter;