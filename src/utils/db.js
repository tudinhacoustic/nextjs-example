import mongoose from "mongoose";

const connect = async () => {
  try {
    console.log("Demo", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;