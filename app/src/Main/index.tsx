import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer } from './styles';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Button } from '../Button';
import { Menu } from '../components/Menu';
import TableModal from '../components/TableModal';
import { useState } from 'react';
import { CartItem } from '../type/CardItem';
import { Cart } from '../components/Cart';
import { Product } from '../type/Product';

export default function Main() {
  const [isTableModalVIsible, setIsTableModalVIsible] = useState(false);
  const [selectTable, setSelectTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  function handleSaveTable(table: string) {
    setSelectTable(table);
  }
  function handleResetOrder() {
    setSelectTable('');
    setCartItems([])
  }

  function handleAddToCart(product: Product){

    if(!selectTable){
      setIsTableModalVIsible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id
      );

      if(itemIndex < 0){
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1
      };

      return newCartItems;

    });

  }
  function handleDecrementCartItem(product:Product){

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id
      );
      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if(item.quantity === 1){
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1
      };

      return newCartItems;

    });

  }
  
  return (
    <>
      <Container>
        <Header
          selectedTable={selectTable}
          onCancelOrder={handleResetOrder}
        />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu onAddToCart={handleAddToCart} />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>
          {!selectTable && (
            <Button onPress={() => setIsTableModalVIsible(true)} >
              Novo Pedido
            </Button>
          )}
          {selectTable && (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCartItem}
              onConfirmOrder={handleResetOrder}
            />
          )}
        </FooterContainer>
      </Footer>
      <TableModal
        visible={isTableModalVIsible}
        onClose={() => setIsTableModalVIsible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
