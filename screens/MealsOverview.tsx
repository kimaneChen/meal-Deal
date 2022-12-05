import { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import { MealsOverviewProps } from '../types';
import MealItem, { MealItemProps } from '../components/MealItem';

function MealsOverview({ route, navigation }: MealsOverviewProps) {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((cat) => cat.id === catId)?.title;

    navigation.setOptions({ title: catTitle });
  }, [catId, navigation]);

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
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
    </View>
  );
}

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
