import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize("gmtcc", "root", "0987539146", {
  dialect: "mysql",
  host: "127.0.0.1",
});

export const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  role: {
    type: DataTypes.ENUM("user", "admin"),
    allowNull: false,
    defaultValue: "user",
  },
  birthDate: {
    type: DataTypes.DATE,
    required: true,
    allowNull: false,
    defaultValue: (new Date(Date.now())),
    validate: {
      notEmpty: true,
    },
  },
  gender: {
    type: DataTypes.ENUM("male", "female", "other"),
    required: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

(async () => {
  await sequelize.sync();
  console.log("All models were synchronized successfully.");
})();
