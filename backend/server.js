require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes/contactRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/contact", router);

PORT = process.env.PORT;

app.get("/api/health", (req, res) => {
    res.send("OK")
});

async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log("Server is running...")
    })
};

startServer();