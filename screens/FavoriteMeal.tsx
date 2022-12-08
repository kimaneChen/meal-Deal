import { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import MealList from '../components/meallist/MealList';
import { FavoritesContext } from '../store/context/favorite-content';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {
  const favoriateCtx = useContext(FavoritesContext);
  const favoriteMealIds = favoriateCtx?.ids;

  if (!favoriteMealIds || favoriteMealIds.length <= 0) {
    return (
      <View style={sytles.container}>
        <Text style={sytles.text}>You do not have favorite meals yet. </Text>
      </View>
    );
  }

  const favoriteMealsOverview = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  return <MealList listItems={favoriteMealsOverview} />;
}

export default FavoritesScreen;

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
