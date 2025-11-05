import React, { FC, memo } from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomStatusBar: FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top }}>
      <StatusBar />
    </View>
  );
};

export default memo(CustomStatusBar);
