import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { faceApiConfig } from "./mockes/config";
import { buildApiConfig } from "./api-config-builder";

const PORT = 8060;

const app = express();
app.use(cors());

const apiConfigs = [faceApiConfig];

apiConfigs.forEach((config) => {
  const { path, router } = buildApiConfig(config);

  app.use(path, router);
});

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`⚡️Server is running at http://localhost:${PORT}`);
});
