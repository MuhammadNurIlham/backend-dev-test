import { logger } from "../utils/logger.utils.js";

export const errorHandling = (err, req, res) => {
  const message = err.message.split(" - ")[1];
  logger.error(err);
  res.status(500).json({
    error: message,
    message: "Internal Server Error",
    data: null,
  });
};
export const notFound = (req, res) => {
  res.status(404).json({
    error: "Ops, what you are looking for is not found!",
    message: "Ops, what you are looking for is not found",
    data: null,
  });
};
