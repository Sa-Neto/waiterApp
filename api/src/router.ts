import { Router } from 'express';
import  path from 'node:path';
import { listCategories } from './app/useCases/category/listCategories';
import { createCategories } from './app/useCases/category/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import multer from 'multer';
import { createProducts } from './app/useCases/products/createProducts';
import { listProductByCategories } from './app/useCases/category/listProductByCategories';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

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

//List producty
router.get('/products',listProducts);

//Creta product
router.post('/products',upload.single('image'),createProducts);

//Get products by category
router.get('/categories/:categoryId/products', listProductByCategories);

//List orders
router.get('/orders',listOrders);

//Create order
router.post('/orders',createOrder);

//Change order status
router.patch('/orders/:orderId', changeOrderStatus);

//Delete/cancel order
router.delete('/orders/:orderId', cancelOrder)
