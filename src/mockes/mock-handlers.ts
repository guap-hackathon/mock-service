import { MockHandler } from "../api-config-builder";
import { delaySend } from "../utils";
import {
  FAKE_FACE_RESPONSE,
  NO_FACE_RESPONSE,
  REAL_FACE_RESPONSE,
} from "./stubs";

const RESPONSES = [REAL_FACE_RESPONSE, FAKE_FACE_RESPONSE, NO_FACE_RESPONSE];

export const successHandler: MockHandler = (_, res) => {
  console.log("SUCCESS");
  const idx = Math.round(Math.random() * 2);
  delaySend(() => res.json(RESPONSES[idx]));
};

export const failedHandler: MockHandler = (_, res) => {
  delaySend(() => res.sendStatus(500));
};
