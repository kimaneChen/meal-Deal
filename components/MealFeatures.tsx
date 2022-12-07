import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface MealFeaturesProps {
  duration?: string;
  affordability?: string;
  complexity?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

function MealFeatures({
  duration,
  affordability,
  complexity,
  style,
  textStyle,
}: MealFeaturesProps) {
  return (
    <View style={[styles.features, style]}>
      <Text style={[styles.feature, textStyle]}>{`${duration}m`}</Text>
      <Text style={[styles.feature, textStyle]}>
        {affordability?.toUpperCase()}{' '}
      </Text>
      <Text style={[styles.feature, textStyle]}>
        {complexity?.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealFeatures;

const styles = StyleSheet.create({
  features: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 4,
  },
  feature: {
    fontSize: 12,
    marginHorizontal: 4,
  },
});
