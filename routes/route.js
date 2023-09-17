import { Router } from "express";
import User from "../Model/User.js";

const route = Router();
// Create a new user
route.post("/", async (req, res) => {
	const { name } = req.body;

	try {
		// check that name is a string
		const isString = typeof name;

		if (isString !== "string") {
			throw new Error("The name field must be a string");
		}
		const newUser = await User.create({ name });

		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
});

//Read user details
route.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const userDetails = await User.findOne({ _id: id });

		res.status(200).json(userDetails);
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
});

// Update a users information
route.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	try {
		const updatedUser = await User.findOneAndUpdate(
			{ _id: id },
			{ name },
			{ new: true }
		);

		res.status(201).json(updatedUser);
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
});

// Delete users information
route.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		await User.deleteOne({ _id: id });

		res.status(200).json({ msg: "User deleted" });
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
});

export default route;
