import { Text } from 'react-native';

import { MealDetailsProps } from '../types';

function MealDetails({ route }: MealDetailsProps) {
  const mealId = route.params.mealID;
  return <Text>This is Meal Details {mealId}</Text>;
}

export default MealDetails;
