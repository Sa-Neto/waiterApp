import styled from 'styled-components/native';

export const ProductContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const ProductImage = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 8px;
`;
export const ProductDetails = styled.View`
  flex:1;
  margin-left: 16px;
`;
export const TextName = styled.Text`
  font-weight: 600;
`;
export const TextDescription = styled.Text`
  font-size: 14px;
  color: #666;

`;
export const TextPrice = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;

export const Separator = styled.View`
  width:100%;
  height:1px;
  background: rgba(204,204,204,.3);
  margin:24px 0;
`;
export const AddToCartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
`;

