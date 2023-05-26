import Mongoose from "mongoose";

const { Schema } = Mongoose;

const countySchema = Schema({
  firstName: String,
  lastName: String,
//  office: String,
});

export const County = Mongoose.model("County", countySchema);
