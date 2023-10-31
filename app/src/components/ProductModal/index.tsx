import { FlatList, Modal, Text } from 'react-native';
import { Product } from '../../type/Product';
import {
  CloseButton,
  Image,
  ModalBody,
  Header,
  TextName,
  TextDescription,
  IngredientsContainer,
  IngredientsText,
  IngredientName,
  Ingredient,
  Footer,
  FooterContainer,
  PriceContainer,
  PreiceText,
  PreiceValue
} from './styles';
import { Close } from '../Icons/Close';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../../Button';

interface ProductModalProsp {
  visible: boolean
  onClose: () => void;
  product: null | Product
  onAddToCart: (produc:Product) => void;
}

export function ProductModal({ visible, onClose, product,onAddToCart }: ProductModalProsp) {

  if (!product) {
    return null;
  }

  function handleAddToCart(){
    onAddToCart(product!);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://192.168.120.110:3001/uploads/${product.imagePath}`
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <TextName>{product.name}</TextName>
          <TextDescription>
            {product.description}
          </TextDescription>

          {product.ingredients.length > 0 && (
            <IngredientsContainer>
              <IngredientsText>Integredientes</IngredientsText>
              <FlatList
                data={product.ingredients}
                keyExtractor={ingredient => ingredient._id}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 20 }}
                renderItem={({ item: ingredient }) => (
                  <Ingredient>
                    <Text>{ingredient.icon}</Text>
                    <IngredientName>{ingredient.name}</IngredientName>
                  </Ingredient>
                )}
              />
            </IngredientsContainer>
          )}
        </Header>
      </ModalBody>
      <Footer>
        <FooterContainer>
          <PriceContainer>
            <PreiceText>Preço</PreiceText>
            <PreiceValue>{formatCurrency(product.price)}</PreiceValue>
          </PriceContainer>
          <Button onPress={handleAddToCart}>
            Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}