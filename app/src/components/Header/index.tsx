import { TouchableOpacity } from 'react-native';
import { Container, Content, OrderHeader, Table, TextCancel, TextMesa, TextPedido, Title300, Title700, TitleFirst } from './styles';


interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void
}

export function Header({ selectedTable,onCancelOrder }: HeaderProps) {
  console.log(selectedTable);
  return (
    <Container>
      {!selectedTable && (
        <>
          <TitleFirst>Bem Vindo(a)</TitleFirst>
          <Title700>
            WAITER
            <Title300>APP</Title300>
          </Title700>
        </>
      )}
      {selectedTable && (
        <Content>
          <OrderHeader>
            <TextPedido>Pedido</TextPedido>
            <TouchableOpacity onPress={onCancelOrder} >
              <TextCancel>
                Cancelar Pedido
              </TextCancel>
            </TouchableOpacity>
          </OrderHeader>
          <Table>
            <TextMesa>Mesa {selectedTable} </TextMesa>
          </Table>
        </Content>
      )}
    </Container>
  );
}
