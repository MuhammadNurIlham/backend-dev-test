import express from "express";
import mainApps from "./main.js";

const app = express();

app.use(mainApps);

export default app;
