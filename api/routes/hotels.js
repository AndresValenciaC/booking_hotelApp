import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
  countByCity,
  countByType,
  getHotelRooms,
} from "../controllers/hotelController.js";
import { verify_IsAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create
router.post("/", verify_IsAdmin, createHotel);

// Update
router.put("/:id", verify_IsAdmin, updateHotel);

// Delete
router.delete("/:id", verify_IsAdmin, deleteHotel);

// Get
router.get("/find/:id", getHotel);

// Get All
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/rooms/:id", getHotelRooms);

export default router;
