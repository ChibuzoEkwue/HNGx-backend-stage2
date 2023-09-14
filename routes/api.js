import { Router } from "express";
import User from "../Model/User.js";

const route = Router();
// Create a new user
route.post("/", async (req, res) => {
	const { name } = req.body;

	try {
		// check for the field name
		if (name === undefined) {
			throw new Error("cannot find the field name");
		}
		// check that name is a string
		const isString = typeof name;

		if (isString !== "string") {
			throw new Error("The name field must be a string");
		}

		const isExist = await User.findOne({ name });

		if (isExist) {
			throw new Error(`The name ${name} is currently in use`);
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
		if (!userDetails) {
			throw new Error("it's seems you inputed an invalid id");
		}
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
		// check id is valid
		const userDetails = await User.findOne({ _id: id });
		if (!userDetails) {
			throw new Error("it's seems you inputed an invalid id");
		}
		// check for the field name
		if (name === undefined) {
			throw new Error("cannot find the field name");
		}
		// check that name is a string
		const isString = typeof name;

		if (isString !== "string") {
			throw new Error("The name field must be a string");
		}

		const updatedUser = await User.findOneAndUpdate(
			{ _id: id },
			{ name },
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
});

// Delete users information
route.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		// check id is valid
		const userDetails = await User.findOne({ _id: id });

		if (!userDetails) {
			throw new Error("it's seems you inputed an invalid id");
		}
		await User.deleteOne({ _id: id });

		res.status(200).json({ msg: "User deleted" });
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
});

export default route;
