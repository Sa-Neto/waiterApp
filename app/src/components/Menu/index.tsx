import { FlatList, } from 'react-native';
import { products } from '../../mocks/products';
import {
  Product,
  ProductDetails,
  AddToCartButton,
  ProductImage,
  Separator,
  TextDescription, TextName, TextPrice
} from './styled';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage
            source={{
              //url do expo para imagem no desenvolvimento
              uri: `http://192.168.120.110:3001/uploads/${product.imagePath}`
              //uri: `http://localhost:3001/uploads/${product.imagePath}`
            }}
          />
          <ProductDetails>
            <TextName>{product.name}</TextName>
            <TextDescription style={{ marginVertical: 8 }}>{product.description}</TextDescription>
            <TextPrice>{formatCurrency(product.price)}</TextPrice>
          </ProductDetails>
          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
