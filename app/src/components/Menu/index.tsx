import { FlatList, } from 'react-native';
import { products } from '../../mocks/products';
import {
  ProductContainer,
  ProductDetails,
  AddToCartButton,
  ProductImage,
  Separator,
  TextDescription, TextName, TextPrice
} from './styled';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import {useState} from 'react';
import { Product } from '../../type/Product';

interface MenuProps{
  onAddToCart: (produc:Product) => void;
}


export function Menu({onAddToCart}: MenuProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  function handleOpenModal(product:Product){
    setIsModalVisible(true);
    setSelectedProduct(product);
  }
  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={product => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
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
            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle  />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
