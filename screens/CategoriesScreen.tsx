import { FlatList, StyleSheet, View } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile, {
  CategoryGridTileProps,
} from '../components/CategoryGridTile';

function renderCategoryItem(item: CategoryGridTileProps) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderCategoryItem(itemData.item)}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
