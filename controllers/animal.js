const { application } = require("express");
const express = require("express");
const Animal = require("../models/animal")

// Create the router
const router = express.Router();

// Error Handler
function errorHandler(error, res){
    res.json(error)
}

// Routes

// Seed Route
router.get("/seed", async (req, res) => {
    await Animal.remove({}).catch((error) => errorHandler(error, res))
    const animals = await Animal.create([
        {name: "Dog", extinct: false, location: "United States", lifeExpectancy: 14
    },
        {name: "Cat", extinct: false, location: "United States", lifeExpectancy: 18
    },
    ]).catch((error) => errorHandler(error, res))
    res.json(animals)
})

// INDUCES
//====================================
// Index Route - GET
router.get("/", async(req, res) => {
    const animals = await Animal.find({}).catch((error) => errorHandler(error, res))
    res.render("animal/index.ejs", {animals})
});

// New Route - GET

// Delete/Destroy Route - Delete

// Update Route - Put

// Create Route - Post

// Edit Route - Get

// Show Route - Get
router.get("/:id", async(req, res) => {
    const animal = await Animal.findById(req.params.id)
    res.render("animal/show.ejs", {animal})
})
//====================================



// Export the router
module.exports = router 