import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CROSS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "20kb",
  })
);

// URL Encoding like %20 + ...
app.use(
  express.urlencoded({
    limit: "20kb ",
  })
);

// Adding static files
app.use(express.static("public"));

// Cookies
app.use(cookieParser());

export default app;
