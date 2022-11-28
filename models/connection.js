//===========================================
require("dotenv").config();
const mongoose = require("mongoose");
//===========================================

// Establishes connection
//===========================================
mongoose.connect(process.env.DATABASE_URL)
//===========================================

// Connection Events
//===========================================
mongoose.connection
.on("open", () => {
    console.log("Connected to Mongo")
})
.on("close", () => {
    console.log("Disconnected from Mongo")
})
.on("error", (error) => {
    console.log(error)
})
//===========================================

// export the mongoose object
//===========================================
module.exports = mongoose
//===========================================
