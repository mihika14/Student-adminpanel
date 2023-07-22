const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(express.json());
const cors = require("cors");
app.use(cors());

const { JWT_SECRET, MONGO_URI } = require("./config");

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => console.log(e));

// APIS FOR LOGIN AND SIGNING USERS
require("./models/UserCredentials");
const User = mongoose.model("credentials");

//api for login
app.post("/createuser", async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      email,
      password: hashedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

// code for login
app.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;
  const userCredential = await User.findOne({ email });
  if (!userCredential) {
    return res.json({ error: "User not found" });
  }
  const isPasswordValid = await bcrypt.compare(
    password,
    userCredential.password
  );
  if (isPasswordValid) {
    const token = jwt.sign({ userId: userCredential._id }, JWT_SECRET);
    return res.status(201).json({ status: "ok", token });
  }
  res.status(401).json({ status: "error", error: "Invalid password" });
});

// APIS FOR CREATE, GET, EDIT, DELETE
require("./models/UserData");
const userdata = mongoose.model("users");

// code to get all the details of the students
app.get("/users", function (req, res, next) {
  userdata
    .find({})
    .then(function (users) {
      res.status(200).send(users).json("Succesful response");
    })
    .catch(next);
});

// code for new student
app.post("/createdata", async (req, res) => {
  try {
    const { name, rollno, section } = req.body;
    await userdata.create({
      name,
      rollno,
      section,
    });
    res.status(200).json({ status: "ok", message: "Student Data added" });
  } catch (error) {
    res.status(400).json({ status: "error", error: "Bad request" });
  }
});

//to edit the existing user via id
app.put("/users/:id", async (req, res) => {
  try {
    const { name, rollno, section } = req.body;
    const updatedUser = await userdata.findByIdAndUpdate(req.params.id, {
      name,
      rollno,
      section,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user." });
  }
});

//to delete the existing user via id
app.delete("/users/:id", function (req, res, next) {
  userdata.findOneAndDelete({ _id: req.params.id }).then(function (user) {
    res.send(user);
  });
});

const swaggerOptions = require("./swaggerOptions");

const specs = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
