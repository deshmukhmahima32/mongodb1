import express from "express";
import { SignUpAction,logInAction}from"../controller/user.controller.js";
const router =express.Router();
router.post("/sign-up",SignUpAction);
router.post("/log-in",logInAction)
export default router;



// mahima:12345
// mahi:123123
//jay:
// tripti:987654
