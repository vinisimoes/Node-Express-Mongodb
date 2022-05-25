import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:root@alura.orwyp.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
