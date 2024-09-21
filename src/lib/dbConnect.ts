import mongoose from "mongoose";

export const dbConnect = () => {
  if (mongoose.connection.readyState === 1) {
    console.log("DB connection is already established");
    return;
  }

  if (!process.env.DATABASE_URI) {
    throw new Error("DATABASE URI is not defined");
  }

  mongoose
    .connect(process.env.DATABASE_URI)
    .then(() => console.log("DB connected successfully"))
    .catch((error) => {
      console.log("DB connection failed + " + error);
    });
};
