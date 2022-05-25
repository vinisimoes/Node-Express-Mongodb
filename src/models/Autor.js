import mongoose from "mongoose";

const autor = new mongoose.Schema(
	{
		id: { type: String },
		nome: { type: String },
		nacionalidade: { type: String },
	},
	{
		versionKey: false,
	}
);

const autores = mongoose.model("autores", autor);

export default autores;
