import express from "express";
import cors from "cors";
import router from "../routes/index.routes.js";

const mainApps = express();

mainApps.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

mainApps.options("*", cors());
mainApps.use(express.json());
mainApps.use(express.urlencoded({ extended: true }));
mainApps.use(router);

export default mainApps;
