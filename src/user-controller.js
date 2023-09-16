const User = require("./user-model")

const getUsers = async (req, res) => {
	let users
	if (req.params.id) {
		users = await User.findById(req.params.id)
	} else {
		users = await User.find()
	}
	res.send(users)
}

const createUser = async (req, res) => {
	const user = await User.create(req.body)
	res.send(user)
}

const deleteUser = async (req, res) => {
	let user
	if (req.params.id) {
		await User.deleteOne({ _id: req.params.id })
		user = "Such user was successfully deleted!"
	} else {
		user = "Such user wasn't found!"
	}
	res.send(user)
}

const modifyUserPassword = async (req, res) => {
	let user

	if (req.params.id && req.body.password) {
		await User.updateOne({ _id: req.params.id }, { $set: { password: req.body.password } })
		user = "You have successfully changed your password"
	} else {
		user = "Pass correct data!"
	}

	res.send(user)
}

module.exports = {
	getUsers,
	createUser,
	deleteUser,
	modifyUserPassword,
}
