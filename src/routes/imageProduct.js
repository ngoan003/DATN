import {
	add,
	get,
	getAll,
	remove,
	update,
} from '../controllers/imageProduct.js';

import express from 'express';

const router = express.Router();
router.get('/imageProduct', getAll);
router.get('/imageProduct/:id', get);
router.post('/imageProduct', add);
router.put('/imageProduct/:id', update);
router.delete('/imageProduct/:id', remove);

export default router;
