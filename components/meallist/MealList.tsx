import { View, FlatList, StyleSheet } from 'react-native';

import MealItem, { MealItemProps } from './MealItem';

export interface MealListProps {
  listItems: any[];
}

function MealList({ listItems }: MealListProps) {
  function renderMealItem(item: MealItemProps) {
    const { id, title, imageUrl, duration, complexity, affordability } = item;
    return (
      <MealItem
        id={id}
        title={title}
        imageUrl={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={listItems}
        keyExtractor={(item) => item.id as string}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
