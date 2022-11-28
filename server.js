
// Dependencies
//===========================================
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const AnimalRouter = require("./controllers/animal")
//===========================================

// Application Object
//===========================================
const app = express()
//===========================================

// Middleware
//===========================================
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true})) //Parse bodies
app.use("/static", express.static("public"))
//===========================================

//Routes & Routers 
//===========================================
app.get("/", (req, res) => {
    res.send("Server is working")
})

app.use("/animal", AnimalRouter)
//===========================================

// Listeners 
//===========================================
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})
//===========================================




