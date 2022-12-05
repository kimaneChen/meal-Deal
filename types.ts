import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  MealCategories: undefined;
  MealsOverview: { categoryId: string };
};

export type CategoriesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MealCategories'
>;

export type MealsOverviewProps = NativeStackScreenProps<
  RootStackParamList,
  'MealsOverview'
>;
