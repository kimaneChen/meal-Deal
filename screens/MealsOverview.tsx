import { View, Text, StyleSheet } from 'react-native';

import { MealsOverviewProps } from '../types';

function MealsOverview({ route }: MealsOverviewProps) {
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
