const AuthRouter = require("express").Router();
const UserModel = require("../models/user.model");

AuthRouter.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user && user._id && user.password === password) {
        return res.status(200).json({
          success: true,
          message: "Login Successful!!",
        });
      } else {
        return res.status(200).json({
          success: false,
          message: "Email or Password is wrong, Try Again!!",
        });
      }
    })
    .catch((err) => {
      return res.status(401).json({
        success: false,
        message: "Error Fetching Users Data!!!",
        error: err,
      });
    });
});

AuthRouter.post("/signup", (req, res, next) => {
  const data = req.body;
  const User = new UserModel(data);
  User.save()
    .then((result) => {
      if (result && result._id) {
        return res.status(200).json({
          message: "User Created Successfully!!",
          success: true,
          data: result,
        });
      }
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      return res.status(401).json({
        message: "Alas! Error Creating User!!",
        error: err.message, // Log the error message
      });
    });
});

AuthRouter.post('/forgotpassword', async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      
      user.password = password;
      const result = await user.save();

      if (result && result._id) {
        return res.status(200).json({
          message: "Password updated successfully!",
          success: true,
          data: result,
        });
      } else {
        return res.status(401).json({
          message: "Alas! Error updating the password.",
          success: false,
        });
      }
    } else {
      return res.status(404).json({
        message: "User not found with the provided email.",
        success: false,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
});






module.exports = AuthRouter;
