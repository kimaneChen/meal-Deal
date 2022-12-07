import { useLayoutEffect, useCallback } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';

import { MealDetailsProps } from '../types';
import { MEALS } from '../data/dummy-data';
import MealFeatures from '../components/MealFeatures';
import List from '../components/List';
import IconButton from '../components/IconButton';

function MealDetails({ route, navigation }: MealDetailsProps) {
  const mealId = route.params.mealID;

  const displayedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler = useCallback(() => {
    console.log('test');
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            icon="heart-outline"
            size={24}
            color="white"
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: displayedMeal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{displayedMeal?.title}</Text>
      <MealFeatures
        duration={displayedMeal?.duration.toString()}
        complexity={displayedMeal?.complexity}
        affordability={displayedMeal?.affordability}
        textStyle={styles.textStyle}
      />
      <View style={styles.listOutContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Ingredients</Text>
          </View>
          <List data={displayedMeal?.ingredients} />
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Step</Text>
          </View>
          <List data={displayedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  screen: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
    color: 'white',
  },
  textStyle: {
    color: 'white',
  },
  subTitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    marginVertical: 4,
    marginHorizontal: 20,
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#e2b497',
  },
  listContainer: {
    width: '80%',
  },
  listOutContainer: {
    alignItems: 'center',
  },
});
