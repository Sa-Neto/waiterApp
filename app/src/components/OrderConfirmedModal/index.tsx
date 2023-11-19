import { Modal, Text } from "react-native"
import { Container, TextDesc, TextPedido, OkButtton, OkButttonText } from "./styled"
import { CheckCircle } from "../Icons/CheckCircle"

interface OrderConfirmedModalProps{
    visible: boolean;
    onOk: () => void;
}

export function OrderConfimedModal({visible,onOk}: OrderConfirmedModalProps){
    return(
        <Modal
            visible={visible}
            animationType="fade"
        >
        <Container>
            <CheckCircle/>
            <TextPedido>Pedido Confirmado</TextPedido>
            <TextDesc>O pedido já entrou na fila de produção</TextDesc>

            <OkButtton
                onPress={onOk}
            >
                <OkButttonText>Ok</OkButttonText>
            </OkButtton>
        </Container>
        </Modal>
    )
}