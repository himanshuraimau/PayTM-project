import { Router } from "express";
import { signUp,signIn,updateDeatils,bulk} from "../controllers/user.controller.js";
import {verifyJWT} from "../middlewares/auth.middlware.js";

const router = Router();

router.route("/signup").post(signUp);
router.route("/signin").post(verifyJWT,signIn);
router.route("/update").put(verifyJWT,updateDeatils);
router.route("/bulk").get(bulk);

export default router;