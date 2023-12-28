import { RequestHandler } from "express";

export const requestInterceptor: RequestHandler = (req, res, next) => {
  console.log(
    `Request: ${req.method} ${req.originalUrl} ${JSON.stringify(req.body)}`
  );
  //console.log(`Request: ${req.method} ${req.path}`);
  next();
};
