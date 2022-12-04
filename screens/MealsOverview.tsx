import { View, Text, StyleSheet } from 'react-native';

function MealsOverview() {
  return (
    <View style={styles.container}>
      <Text>This is Meal Overview!</Text>
    </View>
  );
}

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
