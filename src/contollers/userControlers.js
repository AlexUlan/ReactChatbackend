const express = require("express");
const { UserModel } = require("../schemas/index");

class UserController {
  show(req, res) {
    const id = req.params.id;

    UserModel.findById(id, (err, user) => {
      if (err) {
        return res.status(404).json({ message: "User not Found" });
      }
      res.json(user);
    });
  }
  create(req, res) {
    const postData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password,
    };

    const user = new UserModel(postData);
    user
      .save()
      .then((obj) => {
        res.json(obj);
      })
      .catch((reason) => {
        res.json(reason);
      });
  }

  delete(req, res) {
    const id = req.params.id;
    UserModel.findOneAndRemove({ _id: id })
      .then((user) => {
        res.json({
          messgae: `User ${user.fullname} Deleted`,
        });
      })
      .catch((err) => {
        res.json({
          message: "User not Found",
        });
      });
  }
}
module.exports = UserController;
