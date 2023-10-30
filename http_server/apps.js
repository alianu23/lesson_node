const express = require("express");

const { logger } = require("./middleware/logger");
const userRouter = require("./routes/userRouter");

const PORT = 8008;
const app = express();

app.use(express.json());
app.use(logger);

// api/users
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server is listening at ${PORT} port`));
