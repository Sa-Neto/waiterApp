import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: rgba(0,0,0,.5);
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin: 24px;
`;

export const ModalBody = styled.View`
  background-color: #fafafa;
  flex: 1;
  padding: 32px 24px 0;
`;

export const Header = styled.View`
`;

export const TextName = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

export const TextDescription = styled.Text`
  color: #666;
  margin-top: 8px;
`;

export const IngredientsContainer = styled.View`
  margin-top: 32px;
  flex: 1;
  `;
export const IngredientsText = styled.Text`
  color: #666;
  font-weight: 600;
`;

export const Ingredient = styled.View`
  border: 1px solid rgba(204,204,204,.3);
  border-radius: 8px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const IngredientName = styled.Text`
  color:#666;
  font-size: 14px;
  margin-left: 20px;

`;

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
  `;

export const FooterContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.View`

`;

export const PreiceText = styled.Text`
  color: #666
`;
export const PreiceValue = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;