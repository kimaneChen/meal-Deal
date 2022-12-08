import { Text, View, StyleSheet } from 'react-native';

export interface ListProps {
  data: string[] | undefined;
}

function List({ data }: ListProps) {
  if (!data) {
    return null;
  }

  return (
    <>
      {data.map((item) => (
        <View key={item} style={styles.ListItem}>
          <Text style={styles.itemText}>{item} </Text>
        </View>
      ))}
    </>
  );
}

export default List;

const styles = StyleSheet.create({
  ListItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 20,
    backgroundColor: '#e2b497',
  },
  itemText: {
    textAlign: 'center',
  },
});
