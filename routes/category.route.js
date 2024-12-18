import express from 'express';
import { addCategoryPage,viewCategoryPage,deleteCategoryPage } from '../controller/category.controller.js';

const router=express.Router();

router.post('/add-category',addCategoryPage);
router.get('/view-category',viewCategoryPage);
router.delete('/delete-category',deleteCategoryPage);

export default router;