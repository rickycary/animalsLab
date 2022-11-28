const { application } = require("express");
const express = require("express");
const Animal = require("../models/animal")

// Create the router
const router = express.Router();

// Routes

// Seed Route
router.get("/seed", async (req, res) => {
    await Animal.remove({})
    const animals = await Animal.create([
        {name: "Dog", extinct: false, location: "United States", lifeExpectancy: 14
    },
        {name: "Cat", extinct: false, location: "United States", lifeExpectancy: 18
    },
    ])
    res.json(animals)
})


// Export the router
module.exports = router 