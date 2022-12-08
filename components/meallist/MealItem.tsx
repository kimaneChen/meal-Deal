import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Meal from '../../models/meal';
import MealFeatures from '../MealFeatures';

export type MealItemProps = Partial<Meal>;

function MealItem(props: MealItemProps) {
  const { title, imageUrl, duration, affordability, complexity, id } = props;
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate(
      'MealDetails' as never,
      {
        mealID: id,
      } as never
    );
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) =>
          pressed ? styles.pressedButton : styles.button
        }
        onPress={onPressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealFeatures
            duration={duration?.toString()}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
  },
  pressedButton: {
    flex: 1,
    opacity: 0.5,
  },

  image: {
    width: '100%',
    height: 200,
  },
  title: {
    margin: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
