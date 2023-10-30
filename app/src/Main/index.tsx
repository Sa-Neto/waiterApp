import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer } from './styles';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Button } from '../Button';
import { Menu } from '../components/Menu';
import TableModal from '../components/TableModal';
import { useState } from 'react';
import { CartItem } from '../type/CardItem';
import { Cart } from '../components/Cart/indes';
import { products } from '../mocks/products';

export default function Main() {
  const [isTableModalVIsible, setIsTableModalVIsible] = useState(false);
  const [selectTable, setSelectTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      quantity: 1,
      product: products[0]
    },
    {
      quantity: 2,
      product: products[1]
    }
  ]);
  function handleSaveTable(table: string) {
    setSelectTable(table);
  }
  function handleCancelOrder() {
    setSelectTable('');
  }
  return (
    <>
      <Container>
        <Header
          selectedTable={selectTable}
          onCancelOrder={handleCancelOrder}
        />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
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
            <Cart cartItems={cartItems} />
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
