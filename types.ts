import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import type {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';

export type RootStackParamList = {
  MealCategories: NavigatorScreenParams<RootDrawerParamList>;
  MealsOverview: { categoryId: string };
  MealDetails: { mealID: string };
};

export type CategoriesScreenProps = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamList, 'Categories'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type MealsOverviewProps = NativeStackScreenProps<
  RootStackParamList,
  'MealsOverview'
>;

export type MealDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'MealDetails'
>;

export type RootDrawerParamList = {
  Categories: undefined;
  FavoriteMeal: undefined;
};

export type FavoriteMealProps = DrawerScreenProps<
  RootDrawerParamList,
  'FavoriteMeal'
>;
