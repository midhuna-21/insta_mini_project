import { register } from "../controllers/userController";
import { createPost } from "../controllers/postController";
import express from 'express';
import { authUser } from "../middleware/authUser";

const router = express.Router();

router.post('/signup',register)
router.post('/post/create',authUser,createPost)
