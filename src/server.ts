import "dotenv/config";
import express from "express";
import cors from "cors";
import https from "https";
import http from "http";
import siteRoutes from "./routes/site";
import { requestInterceptor } from "./utils/requestsintercepter";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all("*", requestInterceptor);

//app.use('/admin', adminRoutes);
app.use("/", siteRoutes);

const runServer = (port: number, server: http.Server) => {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

const regularServer = http.createServer(app);
if (process.env.NODE_ENV === "production") {
  //TODO: Configure SSL
  //TODO: Rodar server na 80 e na 443
} else {
  const severPort: number = process.env.PORT
    ? parseInt(process.env.PORT)
    : 9000;
  runServer(severPort, regularServer);
}
