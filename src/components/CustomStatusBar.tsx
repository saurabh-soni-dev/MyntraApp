import { View, StatusBar } from 'react-native';
import React, { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../theme/colors';

interface CustomStatusBarProps {
  backgroundColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
}

const CustomStatusBar: FC<CustomStatusBarProps> = ({
  backgroundColor,
  barStyle = 'default',
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        height: insets.top,
        backgroundColor: backgroundColor ?? colors.white,
      }}
    >
      <StatusBar barStyle={barStyle} />
    </View>
  );
};

export default CustomStatusBar;
