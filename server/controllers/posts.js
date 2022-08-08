import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res) => {
  try {
const{title,text}=req.body
const user =await User.findById(req.userId)
  } catch (err) {
    console.log(object)
  }
};
