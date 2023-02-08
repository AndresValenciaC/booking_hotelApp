import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  distance: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  photos: {
    type: [String],
  },
  description: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    require: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Hotel", hotelSchema);
