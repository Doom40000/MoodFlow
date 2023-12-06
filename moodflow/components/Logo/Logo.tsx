import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Image } from 'react-native-svg';

const imageSrc = require('../../assets/logo1.png');

const Logo = () => {
  const { height, width } = Dimensions.get('window');

  return (
    <View style={{ flex: 0.6 }}>
      <Svg height={height} width={width}>
        <Image
          testID="Logo"
          href={imageSrc}
          width={width}
          height={height}
          preserveAspectRatio="xMidYMin meet"
          y={height / 12}
        />
      </Svg>
    </View>
  );
};

export default Logo;
