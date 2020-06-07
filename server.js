const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.json({msg: " Welcome to the DreamR API"});
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
