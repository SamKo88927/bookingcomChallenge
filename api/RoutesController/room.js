import hotel from "../models/hotel.js"
import Room from "../models/Room.js"
export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)
    try {
        const saveRoom = await newRoom.save()
        try{//updated hotel
            await hotel.findByIdAndUpdate(hotelId,
                {$push: { rooms: saveRoom._id}})
        }catch(error) {
            next(error)
        }
        res.status(200).json(saveRoom)
    } catch (error) {
        next(error)
    }
}

export const updatedRoom = async (req, res, next) => {
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body}
            ,{new:true})
        res.status(200).json(updatedRoom)
    } catch (error) {
        next(error)
    }
}
export const deletedRoom = async (req, res, next) => {
   const hotelId = req.params.hotelid;
    try{
        await Room.findByIdAndDelete(req.params.id)
        try{//updated hotel
            await hotel.findByIdAndUpdate(hotelId,
                {$pull: { room: req.params.id}})
        }catch(error) {
            next(error)
        }
        res.status(200).json("Room deleted successfully")
    } catch (error) {
        next(error)
    }
}
export const getRoom = async (req, res, next) => {
    try{
        const getRoom= await Room.findById(req.params.id)
        res.status(200).json(getRoom)
    } catch (error) {
        next(error)
    }
}
export const getRooms = async (req, res, next) => {
    try{
        const getRooms= await Room.find()
        res.status(200).json(getRooms)
    } catch (error) {
        next(error)
    }
}
