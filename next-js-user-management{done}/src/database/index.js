import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb://localhost:27017/next-js-user-management";

  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e));
};

export default connectToDB;