import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';

interface PropTypes {
  text: string;
  isActive: boolean;
  onPress: () => void;
  style?: ViewStyle;
}

const AppButton: FC<PropTypes> = ({text, isActive, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[styles.button, !isActive && styles.bottonDisabled, style]}
      disabled={!isActive}
      onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderRadius: 5,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  bottonDisabled: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '800',
  },
});

export default AppButton;
