import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export interface IconButtonProps {
  icon?: typeof Ionicons.name;
  size?: number;
  onPress?: () => void;
  color?: string;
}

function IconButton({ icon, size, onPress, color }: IconButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;
