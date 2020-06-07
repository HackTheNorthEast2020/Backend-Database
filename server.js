const express = require("express");
const connectDB = require("./config/db");
const app = express();

app.get("/", (req, res) => res.json({ msg: " Welcome to the DreamR API" }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/goals", require("./routes/goals"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
