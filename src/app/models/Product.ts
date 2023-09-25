import { Schema, model } from 'mongoose';

export const  Category = model('Category', new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imagemPath: {
    type: String,
    required: true,
  },
  price: {
    type:Number,
    required:true
  },
  ingredients: [{
    name:{
      type:Number,
      required:true
    },
    icon:{
      type:String,
      required: true,
    }
  }],
  category:{
    type: Schema.Types.ObjectId,
    required:true,
    ref:'Category'
  }
}));
