import { Router } from "express";
import { handleUserRegisterController, userLoginController } from "../controllers/userController";

const router = Router();
router.post("/login",userLoginController);
router.post("/signup",handleUserRegisterController);

export default router;