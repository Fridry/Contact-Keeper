const express = require("express");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

//Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
