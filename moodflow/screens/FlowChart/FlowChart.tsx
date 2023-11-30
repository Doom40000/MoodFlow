import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Image } from 'react-native-svg';

import styles from '../Home/styles';

const logoSrc = require('../../assets/MoodFlowLogo.png');

const FlowChart = () => {
  const { height, width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Svg height={height} width={width}>
          <Image
            testID="Logo"
            href={logoSrc}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMin meet"
            y={height / 7.5}
          />
        </Svg>
      </View>
    </View>
  );
};

export default FlowChart;
