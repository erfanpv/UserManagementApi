const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((el) => el.message);
    return res.status(400).json({success:false, message: errors });
  }
  if (err.code === 11000) {
    return res.status(400).json({success:false, message: "Email already exists" });
  }
  res.status(500).json({success:false, message: "Server Error" });
};

export default errorHandler;
