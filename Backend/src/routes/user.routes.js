import { Router } from "express";
import { signUp,signIn} from "../controllers/user.controller.js";
import {verifyJWT} from "../middlewares/auth.middlware.js";

const router = Router();

router.route("/signup").post(signUp);
router.route("/signin").post(verifyJWT,signIn);

export default router;