import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "super-secret-key"; // later move to env

// Dummy users (later → database)
const users = [
    { id: 1, username: "alice", password: "1234", role: "consultant",phone:"+32471941219",email:"alice@lanworks.be", department:"development" },
    { id: 2, username: "bob", password: "1234", role: "admin",phone:"+32472941219", email:"bob@lanworks.be", department:"management"},
];

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        SECRET,
        { expiresIn: "1d" }
    );

    res.json({
        token,
        user: { id: user.id, username: user.username, role: user.role , phone:user.phone, email:user.email, department:user.department },
    });
});

app.listen(4000, () => {
    console.log("Backend running on http://localhost:4000");
});
