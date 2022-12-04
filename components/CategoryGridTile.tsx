import { Pressable, View, Text, StyleSheet } from 'react-native';

export interface CategoryGridTileProps {
  title?: string;
  color?: string;
}

function CategoryGridTile(props: CategoryGridTileProps) {
  const { title, color } = props;
  return (
    <View style={[styles.itemContainer, { backgroundColor: color }]}>
      <Pressable>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  itemContainer: {
    margin: 24,
  },
  innerContainer: {
    height: 100,
    width: 80,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
