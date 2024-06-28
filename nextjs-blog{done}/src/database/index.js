import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb://localhost:27017/next-blog";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("blog database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
