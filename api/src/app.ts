import express from "express";
const app = express();

// import { Locals } from "./express";
// app.use(function (req, res, next) {
//     res.typedLocals = res.locals as Locals;
//     next();
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import cors from "cors";
app.use(cors({ origin: true, credentials: true }));

import cookieParser from "cookie-parser";
app.use(cookieParser());

// import * as routes from "./routes";
// app.use("/api/address", routes.address);
// app.use("/api/auth", routes.auth);
// app.use("/api/user", routes.user);
// app.use("/api/product", routes.product);
// app.use("/api/cart", routes.cart);
// app.use("/api/order", routes.order);
// app.use("/api/reviews", routes.reviews);
// app.use("/api/payment", routes.payment);
// app.use("/api/admin", routes.admin);
// app.use("/api/misc", routes.misc);

// production deployment
import { join } from "path";
if (process.env.NODE_ENV === "production") {
   app.use(express.static(join(__dirname, "../client", "build")));
   app.get("*", (_, res) => {
      res.sendFile(join(__dirname, "../client", "build", "index.html"));
   });
}

// import { error } from "./middlewares";
// app.use(error.invalidUrl);
// app.use(error.errors);

export default app;
