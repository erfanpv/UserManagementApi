import User from "../models/User.js";

export const createUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({success:true, message: `User ${user?.name} Registration Success`, data:user});
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({success:true,message:"Users fetched successfully",data:users});
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({success:false, message: "User not found" });
    res.status(200).json({sucess:true,message:`User ${user?.name} fetched success`,data:user});
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({success:false, message: "User not found" });
    res.status(200).json({success:true,message:`User Update Sucesss`,data:user});
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({success:false, message: "User not found" });
    res.status(200).json({success: true,message: `User ${user?.name} deleted successfully`,data:user});
  } catch (error) {
    next(error);
  }
};
