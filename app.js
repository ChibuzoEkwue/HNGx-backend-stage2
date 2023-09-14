import express from "express";
import route from "./routes/route.js";
import connectDB from "./utils/db.js";
const app = express();

// Connect to database
connectDB();

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ msg: "Systems are online" });
});

app.use("/api", route);

app.listen(port, () => {
	console.log("Server is running");
});
