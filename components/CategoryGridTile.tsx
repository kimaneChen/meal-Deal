import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';

export interface CategoryGridTileProps {
  title?: string;
  color?: string;
}

function CategoryGridTile(props: CategoryGridTileProps) {
  const { title, color } = props;
  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? styles.buttonPressed : styles.button
        }
        android_ripple={{ color: '#ccc' }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    flex: 1,
    opacity: 0.75,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
