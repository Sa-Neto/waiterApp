import { FlatList, Text } from 'react-native';
import { categories } from '../../mocks/categories';
import { Category, CategoryName, Icon } from './styled';
import { useState } from 'react';

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId ;
    setSelectedCategory(categoryId);

  }
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
      data={categories}
      keyExtractor={category => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;
        return (
          <Category onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text opacity={ isSelected ? 1 : .5 }>{category.icon}</Text>
            </Icon>
            <CategoryName
              opacity={ isSelected ? 1 : .5 }
            >{category.name}</CategoryName>
          </Category>
        );
      }}
    />
  );
}
