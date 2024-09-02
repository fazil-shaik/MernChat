import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://mainuser:mainuser@cluster1.5wkruqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1');
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
