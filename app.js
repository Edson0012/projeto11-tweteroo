import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

const tweets = [];

app.get("/tweets", (req, res) => {
    const tweetados = tweets.map((tweet) => {
        return {
            username: tweet.username,
            avatar: users.find((user) => {
                return tweet.username === user.username;
            }).avatar,
            tweet: tweet.tweet,
        };
    });

    res.send(tweetados);
});

app.post("/sign-up", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("OK");
});

app.post("/tweets", (req, res) => {
    const tweet = req.body;
    tweets.push(tweet);
    res.send("OK");
});

app.listen(5000, () => console.log("listen 5000 on"));
