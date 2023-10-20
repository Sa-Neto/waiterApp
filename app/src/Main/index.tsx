import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer } from './styles';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Button } from '../Button';
import { Menu } from '../components/Menu';
import TableModal from '../components/TableModal';
import {useState} from 'react';

export default function Main() {
  const [isTableModalVIsible, setIsTableModalVIsible] = useState(false);

  return (
    <>
      <Container>
        <Header />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu/>
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>
          <Button onPress={() => setIsTableModalVIsible(true)} >
              Novo Pedido
          </Button>
        </FooterContainer>
      </Footer>
      <TableModal
        visible={isTableModalVIsible}
        onClose={() => setIsTableModalVIsible(false)}
        3:10:17
      />
    </>
  );
}
