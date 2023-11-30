import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Image } from 'react-native-svg';

import Chart from '../../components/chart/chart';

const imageSrc = require('../../assets/MoodFlowLogo.png');

const CheckPage = () => {
  const { height, width } = Dimensions.get('window');

  return (
    <View>
      <View style={{ flex: 1 }}>
        <Svg height={height} width={width}>
          <Image
            testID="Logo"
            href={imageSrc}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMin meet"
            y={height / 7.5}
          />
        </Svg>
      </View>
      <Chart />
    </View>
  );
};

export default CheckPage;
