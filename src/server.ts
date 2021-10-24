import express from "express";

const app = express();

app.use(express.json());

app.listen(3333, () => console.log("Rodando."));

app.get("/", (req, res) => res.json({ hello: "world" }));

app.post("/courses", (req, res) => {
    const { name } = req.body;
    return res.json({ name });
});
