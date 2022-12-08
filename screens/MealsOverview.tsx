import { useLayoutEffect } from 'react';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import { MealsOverviewProps } from '../types';
import MealList from '../components/meallist/MealList';

function MealsOverview({ route, navigation }: MealsOverviewProps) {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((cat) => cat.id === catId)?.title;

    navigation.setOptions({ title: catTitle });
  }, [catId, navigation]);

  return <MealList listItems={displayMeals} />;
}

export default MealsOverview;
