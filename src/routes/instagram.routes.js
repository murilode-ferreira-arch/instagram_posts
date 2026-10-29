import { Router } from 'express';
import postController from '../controllers/post.controller.js';

const router = Router();

router.post('/', postController.create);
router.get('/', postController.getAll);
router.get('/:id', postController.getById);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);

export default router;