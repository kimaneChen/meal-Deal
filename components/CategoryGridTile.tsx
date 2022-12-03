import { Pressable, View, Text } from 'react-native';

export interface CategoryGridTileProps {
  title?: string;
  color?: string;
}

CategoryGridTile.defaultProps = {
  title: 'My good habit',
  color: 'black',
};

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
