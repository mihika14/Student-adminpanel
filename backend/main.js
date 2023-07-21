const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoUrl =
  "mongodb+srv://mihikasaxena13:DSZx8ZaWB0StEqjH@cluster0.g93niuc.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => console.log(e));

require("./models/UserData");

require("./models/UserCredentials");

const user = mongoose.model("credentials");

app.post("/createuser", async (req, res) => {
  const { email, password } = req.body;

  try {
    const olduser = await user.findOne({ email });

    if (olduser) {
      return res.json({ error: "User Exists" });
    }

    await user.create({
      email,
      password,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

// code for login
app.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;

  const usercredential = await user.findOne({ email });

  if (!usercredential) {
    return res.json({ error: "User not found" });
  }

  if (password === usercredential.password) {
    // const token = jwt.sign({}, JWT_SECRET);
    if (res.status(201)) {
      return res.json({ status: "ok", data: password });
    } else {
      return res.json({ error: "error" });
    }
  }

  res.json({ status: "error", error: "invalid password" });
});


const userdata = mongoose.model("users");

// code to get all the details of the users
app.get("/users", function (req, res, next) {
  userdata.find({})
    .then(function (users) {
      res.send(users);
    })
    .catch(next);
});


// code for new notes
app.post("/createdata", async (req, res) => {
  try {
    const { day, description } = req.body;
    await userdata.create({
      day,
      description,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
