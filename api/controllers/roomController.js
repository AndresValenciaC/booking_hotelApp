import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
//Create Room
export const createRoom = async (req, res, next) => {
  const hotel_id = req.params.hotel_id;
  const new_room = Room(req.body);
  try {
    const saved_room = await new_room.save();
    try {
      await Hotel.findByIdAndUpdate(hotel_id, {
        $push: { rooms: saved_room._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(saved_room);
  } catch (error) {
    next(error);
  }
};

//Update Room
export const updateRoom = async (req, res, next) => {
  try {
    const updateRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateRoom);
  } catch (error) {
    next(error);
  }
};

// Update updateRoomAvailability
export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      {
        "roomNumbers._id": req.params.id,
      },
      {
        $push: { "roomNumbers.$.unavailableDates": req.body.dates },
      }
    );

    res.status(200).json("Room updated");
  } catch (error) {
    next(error);
  }
};
// Delete Room
export const deleteRoom = async (req, res, next) => {
  const hotel_id = req.params.hotel_id;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotel_id, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json("Room deleted");
  } catch (error) {
    next(error);
  }
};
// Get Room
export const findRoom = async (req, res, next) => {
  try {
    const findRoom = await Room.findById(req.params.id);
    res.status(200).json(findRoom);
  } catch (error) {
    next(error);
  }
};

// Get All Rooms
export const findAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};
