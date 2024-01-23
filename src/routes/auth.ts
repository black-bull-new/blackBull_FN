import { Router } from "express";
import { AddUser, CheckToken, LoginUser } from "../controllers/auth";
import { isAdmin } from "../middlewares";

const routes = Router();

routes.post("/add-user", AddUser);
routes.post("/login", LoginUser)

routes.get("/check-token", isAdmin, CheckToken)


export default routes;

