import * as express from "express";
import * as path from "path";
import { Request, Response, NextFunction } from "express";

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(3000, () => {
  console.info("Server started on port 3000");
});
