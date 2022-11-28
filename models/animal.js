const { mongo } = require("mongoose")
const mongoose = require("./connection")

// Create Schema
const animalSchema = new mongoose.Schema({
    name: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
}, {timestamps: true})

// Animal Model - Interface with the database for animals
const Animal = mongoose.model("Animal", animalSchema)

// Export the Animal Model
module.exports = Animal