import { View, Text, StyleSheet, FlatList } from 'react-native';

import { MEALS } from '../data/dummy-data';
import { MealsOverviewProps } from '../types';
import MealItem, { MealItemProps } from '../components/MealItem';

function MealsOverview({ route }: MealsOverviewProps) {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(item: MealItemProps) {
    const { title, imageUrl, duration, complexity, affordability } = item;
    // const mealItemProps = {
    //   title,
    //   imageUrl,
    //   duration,
    //   complexity,
    //   affordability,
    // };
    return (
      <MealItem
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
