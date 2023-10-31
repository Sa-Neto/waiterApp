import styled from 'styled-components/native';

export const Item = styled.View`
 padding: 8px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Actions = styled.View`
flex-direction: row;
`;
export const ActionsPlus = styled.TouchableOpacity`
margin-right: 24px;
`;

export const Image = styled.Image`
  width:48px;
  height: 40px;
  border-radius: 6px;
`;

export const QuantityContainer = styled.View`
  min-width: 20px;
  margin-left: 12px;
`;

export const  QuantityText = styled.Text`
  color: #666;
  font-size: 14px;
`;

export const ProductDetails = styled.View`

`;
export const ProductDetailsName = styled.Text`
  font-size: 14px;
  color: #666 ;
`;
export const ProductDetailsPrice = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-top: 4px;
`;
export const Summary = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`;
export const TotalContainer = styled.View`
  margin-right: 32px;
  flex: 1;
`;
export const TotalText = styled.Text`
  color: #666;
`;

export const TotalPrice = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;