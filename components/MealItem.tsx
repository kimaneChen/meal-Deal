import { Text } from 'react-native';

import Meal from '../models/meal';

export type MealItemProps = Partial<Meal>;

function MealItem(props: MealItemProps) {
  const { title } = props;
  return <Text>{title}</Text>;
}

export default MealItem;
