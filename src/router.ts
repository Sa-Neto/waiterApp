import { Router } from 'express';
import  path from 'node:path';
import { listCategories } from './app/useCases/category/listCategories';
import { createCategories } from './app/useCases/category/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import multer from 'multer';
import { createProducts } from './app/useCases/products/createProducts';
import { listProductByCategories } from './app/useCases/category/listProductByCategories';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req,file,callback){
      callback(null,path.resolve(__dirname,'..','uploads'));
    },
    filename(req,file,callback){
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

//List category
router.get('/categories', listCategories);

//Create category
router.post('/categories', createCategories);

//List Producty
router.get('/products',listProducts);

//Creta product
router.post('/products',upload.single('image'),createProducts);

// List order
router.get('/categories/:categoryId/products', listProductByCategories);


