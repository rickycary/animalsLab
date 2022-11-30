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
router.get("/new", (req, res) => {
    res.render("animal/new.ejs")
})

// Delete/Destroy Route - Delete
router.delete("/:id", async(req, res) => {
    await Animal.findByIdAndRemove(req.params.id).catch((error) => errorHandler(error, res))
    res.redirect("/animal")
})

// Update Route - Put
router.put("/:id", async (req, res) => {
    // Make sure extinct is true or false
    req.body.extinct = Boolean(req.body.extinct)
    // Update the animal
    await Animal.findByIdAndUpdate(req.params.id, req.body)
    // Redirect to index
    res.redirect("/animal")
})

// Create Route - Post
router.post("/", async (req, res) => {
    // Make sure extinct is true or false 
    req.body.extinct = Boolean(req.body.extinct)
    // Create the animal
    await Animal.create(req.body).catch((error) => errorHandler(error, res))
    // redirect back to the index
    res.redirect("/animal")
})

// Edit Route - Get
router.get("/:id/edit", async (req, res) => {
    const animal = await Animal.findById(req.params.id).catch((error) => errorHandler(error, res))
    res.render("animal/edit.ejs", {animal})
})

// Show Route - Get
router.get("/:id", async(req, res) => {
    const animal = await Animal.findById(req.params.id).catch((error) => errorHandler(error, res))
    res.render("animal/show.ejs", {animal})
})
//====================================



// Export the router
module.exports = router 