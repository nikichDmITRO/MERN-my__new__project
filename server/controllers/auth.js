import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const isUsed = await User.findOne({ username });
    if (isUsed) {
      return res.json({
        message: "Данный username  уже занят",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hash,
    });

    await newUser.save();

    res.json({
      newUser,
      message: "Новый пользователь успешно прошел регистрацию",
    });
  } catch (err) {
    res.json({ message: "Ошибка при создании пользователя" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!username) {
      return res.json({
        message: "Такого юзера не существует",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.json({
        message: "Неверный логин либо пароль",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    res.json({
      token,
      user,
      message: "Вы авторизованы",
    });
  } catch (err) {
    res.json({ message: "Ошибка при авторизации" });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      res.json({ message: "Такого юзера не существует" });
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    res.json({ user, token, message:"Вы успешно просмотрели пользователя" });

  } catch (err) {
    res.json({ message: "Нет доступа к этому пользователю" });
  }
};
