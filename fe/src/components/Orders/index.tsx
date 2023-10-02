import { OrderBoard } from "../OrderBoard";
import { Container } from "./styles";


export function Order() {
  return(
    <Container>
        <OrderBoard
          icon="⌚"
          title="Fila de Espera"
        />
        <OrderBoard
          icon="👩‍🍳"
          title="Em Preparação"
        />
        <OrderBoard
          icon="✅"
          title="Pronto!"
        />
    </Container>
  )
}
