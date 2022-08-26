import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const user = [];

const twitter = {
    username: "",
    tweet: "",
};

app.post("/sign-up", (req, res) => {
    const users = req.body;
    user.push(users);
    res.send(users);
    console.log("OK");
});

app.listen(5000, () => console.log("listen 5000 on"));
