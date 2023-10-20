import { Container, TextButton } from './styles';

interface ButtonProps{
  children:string;
  onPress: () => void;
  disabled?: boolean
}

export function Button({children, onPress, disabled}: ButtonProps){
  return(
    <Container onPress={onPress}  disabled={disabled} >
      <TextButton> {children} </TextButton>
    </Container>
  );
}
