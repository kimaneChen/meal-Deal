import { Pressable, View, Text } from 'react-native';

export interface CategoryGridTileProps {
  title?: string;
  color?: string;
}

function CategoryGridTile(props: CategoryGridTileProps) {
  const { title, color } = props;
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
