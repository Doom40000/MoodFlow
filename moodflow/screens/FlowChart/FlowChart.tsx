/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Image } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

import DayQuestion from '../../components/FlowChartComponents/DayQuestion';
import DietQuestion from '../../components/FlowChartComponents/DietQuestion';
import ExerciseQuestion from '../../components/FlowChartComponents/ExerciseQuestion';
import SleepQuestion from '../../components/FlowChartComponents/SleepQuestion';
import SocialisingQuestion from '../../components/FlowChartComponents/SocialisingQuestion';
import styles from '../Home/styles';
// Import all the components, pass one of them into the state, setting the state as the first questions.
// When you push the button, you record the result and set the state with the next index in the array.
// Components = [1,2,3,4,5,6,7]

const flowChartQuestions = [
  DayQuestion,
  DietQuestion,
  ExerciseQuestion,
  SleepQuestion,
  SocialisingQuestion,
];

const logoSrc = require('../../assets/MoodFlowLogo.png');

const FlowChart = () => {
  const { height, width } = Dimensions.get('window');
  const formOnePosition = useSharedValue(1);
  const [question, setQuestion] = useState(1);

  // Set up animation style for form components
  const formOneAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(formOnePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(formOnePosition.value, { duration: 1000 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  // Modularity since we're keeping the animation state but change the question (while it's invisible)
  const formButtonHandler = () => {
    formOnePosition.value = 0;
    setTimeout(() => {
      setQuestion(2)
      formOnePosition.value = 1;
    }, 1000)
  };

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
      {question == 1 && <Animated.View style={[{ flex: 2 }, formOneAnimatedStyle]}>
        <ExerciseQuestion formButtonHandler={formButtonHandler} />
      </Animated.View>}
      {question == 2 && <Animated.View style={[{ flex: 2 }, formOneAnimatedStyle]}>
        <SleepQuestion formButtonHandler={formButtonHandler} />
      </Animated.View>}
    </View>
  );
};

export default FlowChart;
