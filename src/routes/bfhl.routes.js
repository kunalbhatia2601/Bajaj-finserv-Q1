import express from 'express';
import { getBfhl } from '../controllers/bfhl.controller.js';

const router = express.Router();

router.get('/', getBfhl);

export default router;