import { Board, OrderContainer } from "./styles";

interface OrderBoardProps {
  icon:string;
  title: string;
}

export function OrderBoard({icon,title}:OrderBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      <OrderContainer>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrderContainer>
      <OrderContainer>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrderContainer>

    </Board>
  )
}
