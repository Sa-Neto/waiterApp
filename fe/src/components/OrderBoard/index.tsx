import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrderContainer } from "./styles";
import {useState} from 'react';

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrderBoard({icon,title,orders}:OrderBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<null| Order>(null)

  function handleModal(order: Order){
    setIsModalVisible(true)
    setSelectedOrder(order)
  }
  function handleCloseModal(){
    setIsModalVisible(false)
    setSelectedOrder(null)
  }
  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrderContainer>
        {orders.map((order) => (
          <button onClick={() => handleModal(order)} type="button" key={order._id}>
          <strong>Mesa {order.table}</strong>
          <span>{order.products.length} itens</span>
        </button>
        ))}
      </OrderContainer>
      ) }

    </Board>
  )
}
