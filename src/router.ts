import { Router } from 'express';

import { listCategories } from './app/useCases/category/listCategories';
import { createCategories } from './app/useCases/category/createCategory';

export const router = Router();
//List category
router.get('/categories', listCategories);
//Create category
router.post('/categories', createCategories);
//List Category
//List Category


