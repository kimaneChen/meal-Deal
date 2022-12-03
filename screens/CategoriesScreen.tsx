import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile, {
  CategoryGridTileProps,
} from '../components/CategoryGridTile';

function renderCategoryItem(item: CategoryGridTileProps) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renderCategoryItem(itemData.item)}
    />
  );
}

export default CategoriesScreen;
