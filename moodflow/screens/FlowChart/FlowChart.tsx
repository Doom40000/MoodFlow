import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Image } from 'react-native-svg';

import DayQuestion from '../../components/FlowChartComponents/DayQuestion';
import styles from '../Home/styles';
// Import all the components, pass one of them into the state, setting the state as the first questions.
// When you push the button, you record the result and set the state with the next index in the array.
// Components = [1,2,3,4,5,6,7]

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
      <View style={{ flex: 2 }}>
        <DayQuestion />
      </View>
    </View>
  );
};

export default FlowChart;
