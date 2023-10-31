import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../type/CardItem';
import {
  Actions,
  ActionsPlus,
  Image,
  Item,
  ProductContainer,
  ProductDetails,
  ProductDetailsName,
  ProductDetailsPrice,
  QuantityContainer,
  QuantityText,
  Summary,
  TotalContainer,
  TotalPrice,
  TotalText
} from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { Button } from '../../Button';
import { Product } from '../../type/Product';


interface CartProps {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onDecrement: (product: Product) => void;
}

export function Cart({ cartItems, onAdd, onDecrement }: CartProps) {
  const total = cartItems.reduce((acc,cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  },0);
  return (
    <>
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 20, maxHeight: 150 }}
          renderItem={({ item: cartItem }) => (
            <Item>
              <ProductContainer>
                <Image
                  source={{
                    uri: `http://192.168.120.110:3001/uploads/${cartItem.product.imagePath}`
                  }}
                />
                <QuantityContainer>
                  <QuantityText>{cartItem.quantity}x</QuantityText>
                </QuantityContainer>

                <ProductDetails>
                  <ProductDetailsName>{cartItem.product.name}</ProductDetailsName>
                  <ProductDetailsPrice>
                    {formatCurrency(cartItem.product.price)}
                  </ProductDetailsPrice>
                </ProductDetails>

              </ProductContainer>
              <Actions>
                <ActionsPlus onPress={() => onAdd(cartItem.product)}>
                  <PlusCircle />
                </ActionsPlus>
                <TouchableOpacity onPress={() => onDecrement(cartItem.product)}>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>

            </Item>
          )}
        />
      )}

      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <TotalText>Total</TotalText>
              <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </>
          ) : (
            <TotalText>Seu carrinho está vazio</TotalText>
          )}
        </TotalContainer>
        <Button
          onPress={() => alert('Clicou')}
          disabled={cartItems.length === 0}
        >
          Confirmar Pedido!
        </Button>
      </Summary>
    </>
  );
}