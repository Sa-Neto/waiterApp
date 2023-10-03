import { Order } from "../../types/Order";
import { OrderBoard } from "../OrderBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
      "_id": "65147e86f6a7f7b210a5394a",
      "table": "123",
      "status": "DONE",
      "products": [
          {
              "product": {
                  "name": "Pizza 4 Quijos",
                  "imagePath": "1695838615774-quatro-queijos.png",
                  "price": 40,
              },
              "quantity": 3,
              "_id": "65147e86f6a7f7b210a5394b"
          },
          {
              "product": {
                  "name": "Coca cola",
                  "imagePath": "1695838453873-coca-cola.png",
                  "price": 7,
              },
              "quantity": 3,
              "_id": "65147e86f6a7f7b210a5394c"
          },
          {
            "product": {
                "name": "Coca cola",
                "imagePath": "1695838453873-coca-cola.png",
                "price": 7,
            },
            "quantity": 3,
            "_id": "65147e86f6a7f7b210a5394c"
        }
      ],
  }
]


export function Orders() {
  return(
    <Container>
        <OrderBoard
          icon="⌚"
          title="Fila de Espera"
          orders={orders}
        />
        <OrderBoard
          icon="👩‍🍳"
          title="Em Preparação"
          orders={[]}
        />
        <OrderBoard
          icon="✅"
          title="Pronto!"
          orders={[]}
        />
    </Container>
  )
}
