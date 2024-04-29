import "dotenv/config";
import app from "./src/middlewares/app.js";

const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App Server running on ${hostname}${port}`);
});
