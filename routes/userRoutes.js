import { register } from "../controllers/userController";
import { createPost } from "../controllers/postController";
import express from 'express';

const router = express.Router();

router.post('/signup',register)
router.post('/post/create',createPost)
