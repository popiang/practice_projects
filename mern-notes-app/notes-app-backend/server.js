const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

//* routes
const noteRoutes = require("./routes/noteRoutes");
app.use("/api/notes", noteRoutes);

//* connect to mongodb
mongoose.connect(process.env.DATABASE_URI).then(() => {
	console.log("Connected to database");
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	})
})