import express from "express";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  findRoom,
  findAllRooms,
  updateRoomAvailability,
} from "../controllers/roomController.js";
import { verify_IsAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/:hotel_id", verify_IsAdmin, createRoom);
router.put("/:id", verify_IsAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);
router.delete("/:id/:hotel_id", verify_IsAdmin, deleteRoom);
router.get("/:id", findRoom);
router.get("/", findAllRooms);

export default router;
