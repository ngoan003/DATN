import {
	GetAll,
	addAddress,
	deleteAddress,
	getAddressById,
	updateAddress,
} from '../controllers/address.js';

import express from 'express';

const router = express.Router();
router.get('/address', GetAll);
router.get('/address/:id', getAddressById);
router.post('/address', addAddress);
router.put('/address/:id', updateAddress);
router.delete('/address/:id', deleteAddress);
export default router;
