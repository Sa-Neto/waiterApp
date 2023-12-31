import { Modal, Platform, TouchableOpacity } from 'react-native';
import {
  Form,
  ModalBody,
  Overlay,
  Header,
  HeaderText,
  Input
} from './styles';
import { Close } from '../Icons/Close';
import { Button } from '../../Button';
import { useState} from 'react';

interface TableModalProps{
  visible: boolean;
  onClose: () => void;
  onSave: (table:string) => void;
}

export default function TableModal({
  visible,onClose,onSave}: TableModalProps

) {
  const [table,setTable] = useState('');
  function handleSave(){
    setTable('');
    onSave(table);
    onClose();
  }
  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>

          <Header>
            <HeaderText>Informe a Mesa</HeaderText>
            <TouchableOpacity onPress={onClose}>
              <Close color='#666' />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da Mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTable}
              value={table}
            />
            <Button
              onPress={() => handleSave() }
              disabled={table.length === 0 }
            >
              Salvou!
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}