import { FlatList, Text, TouchableOpacity } from 'react-native';
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


interface CartProps {
  cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {
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
                <ActionsPlus>
                  <PlusCircle />
                </ActionsPlus>
                <TouchableOpacity>
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
              <TotalPrice>{formatCurrency(120)}</TotalPrice>
            </>
          ) : (
            <Text color="#999">Seu carrinho está vazio</Text>
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