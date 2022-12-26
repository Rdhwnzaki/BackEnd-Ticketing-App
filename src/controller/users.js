const Modelusers = require("../model/users");
const {
  createUsers,
  findEmail,
  verification,
  updateUser,
  getUserByToken,
  updatePhoto,
} = require("../model/users");
const { response } = require("../middlewares/common");
const { generateToken } = require("../helper/auth");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const email = require("../middlewares/email");
const Host = process.env.HOST;
const Port = process.env.PORT;
const usersController = {
  insert: async (req, res, next) => {
    let {
      rows: [users],
    } = await findEmail(req.body.email);
    if (users) {
      return response(res, 404, false, "email already use", "register fail");
    }
    let digits = "0123456789";
    let otp = "";
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }

    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(req.body.password);
    //   let password1 = req.body.password;
    //   let confirm = req.body.confirm;

    let data = {
      id: uuidv4(),
      email: req.body.email,
      password,
      fullname: req.body.fullname,
      // phonenumber: req.body.phonenumber,
      // confirm,
      // status: req.body.auth,
      otp,
    };
    //   if (password1 !== confirm)
    //     return response(res, 417, false, null, "password tidak sesuai");
    try {
      const result = await createUsers(data);
      if (result) {
        console.log(result);
        let sendEmail = await email(
          data.email,
          otp,
          `https://${Host}:${Port}/${email}/${otp}`,
          data.fullname
        );
        if (sendEmail == "email not sent!") {
          return response(res, 404, false, null, "register fail");
        }
        response(
          res,
          200,
          true,
          { email: data.email },
          "register success please check your email"
        );
      }
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "register fail");
    }
  },
  otp: async (req, res, next) => {
    console.log("email", req.body.email);
    console.log("otp", req.body.otp);
    let {
      rows: [users],
    } = await findEmail(req.body.email);
    if (!users) {
      return response(res, 404, false, null, " email not found");
    }
    if (users.otp == req.body.otp) {
      const result = await verification(req.body.email);
      return response(
        res,
        200,
        true,
        result.command,
        " verification email success"
      );
    }
    return response(
      res,
      404,
      false,
      null,
      " wrong otp please check your email"
    );
  },
  login: async (req, res, next) => {
    console.log("email", req.body.email);
    console.log("password", req.body.password);
    let {
      rows: [users],
    } = await findEmail(req.body.email);
    if (!users) {
      return response(res, 404, false, null, "login gagal email salah");
    }
    const password = req.body.password;
    const validation = bcrypt.compareSync(password, users.password);

    if (!validation) {
      return response(res, 404, false, null, "login gagal password salah");
    }
    if (users.status == 0) {
      return response(res, 402, false, null, "belum verif");
    }

    delete users.password;

    let payload = {
      email: users.email,
      id: users.id,
      role: users.role,
    };
    users.token = generateToken(payload);
    response(res, 200, true, users, "login berhasil");
  },
  update: async (req, res, next) => {
    try {
      const id = req.payload.id;
      console.log(id);
      const {
        photo: [photo],
      } = req.files;
      req.body.photo = photo.path;
      const result = await updateUser(id, req.body);
      return response(res, 200, true, result, "Success update user data");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "Update user data failed");
    }
  },
  getUser: async (req, res) => {
    try {
      const id = req.payload.id;
      console.log(id);
      const result = await getUserByToken(id);
      response(res, 200, true, result.rows, "Success Get User By Token");
    } catch (error) {
      response(res, 400, false, error, "Get User By Token Fail");
    }
  },
  editPhoto: async (req, res) => {
    try {
      const id = req.payload.id;
      console.log("id", id);
      const {
        photo: [photo],
      } = req.files;
      req.body.photo = photo.path;
      await Modelusers.updatePhoto(id, req.body);
      return response(res, 200, true, req.body, "Update Photo Success");
    } catch (err) {
      return response(res, 404, false, err, "Update Photo Fail");
    }
  },
};

exports.usersController = usersController;
