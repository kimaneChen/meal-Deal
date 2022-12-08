import 'react-native-gesture-handler';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';

export type RootStackParamList = {
  MealCategories: NavigatorScreenParams<DrawerParamList>;
  MealsOverview: { categoryId: string };
  MealDetails: { mealID: string };
};

export type CategoriesScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, 'Categories'>,
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

export type DrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
};

export type FavoritesProps = DrawerScreenProps<DrawerParamList, 'Favorites'>;
