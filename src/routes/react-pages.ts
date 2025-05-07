import express, { Application, Request, Response } from "express";
import React from "react";
import { renderToString } from "react-dom/server";

import IndexPage from "../views/react/index";
import SamplePage from "../views/react/sample";
import GraphiQLPage from "../views/react/graphiql";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const content = renderToString(React.createElement(IndexPage));
  res.send(content);
});

router.get("/sample", (req: Request, res: Response) => {
  const content = renderToString(React.createElement(SamplePage));
  res.send(content);
});

router.get("/graphiql", (req: Request, res: Response) => {
  const content = renderToString(React.createElement(GraphiQLPage));
  res.send(`
        <!DOCTYPE html>
        <html>
            <head><title>GraphiQL</title></head>
            <body><div id="root">${content}</div></body>
        </html>
    `);
});

export default (app: Application) => {
  app.use("/", router);
};
