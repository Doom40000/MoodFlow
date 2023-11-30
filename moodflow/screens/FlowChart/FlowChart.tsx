import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Image } from 'react-native-svg';

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

type FormButtonHandlerType = () => void;
export interface QuestionProps {
  formButtonHandler: FormButtonHandlerType;
}

const logoSrc = require('../../assets/MoodFlowLogo.png');
const goBackArrow = require('../../assets/expand_more_FILL0_wght400_GRAD0_opsz24.png');

const FlowChart = () => {
  const { height, width } = Dimensions.get('window');
  const formOnePosition = useSharedValue(1);
  const [question, setQuestion] = useState(0);

  // Set up animation style for form components
  const formOneAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(formOnePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(formOnePosition.value, { duration: 800 }),
      transform: [{ translateY: withTiming(interpolation, { duration: 800 }) }],
    };
  });

  //! Handle reaching end of questions
  const formButtonHandler = () => {
    formOnePosition.value = 0;
    setTimeout(() => {
      setQuestion(question + 1);
      formOnePosition.value = 1;
    }, 1000);
  };

  // Conditionally render questions of array
  const renderQuestionComponent = () => {
    const QuestionComponent = flowChartQuestions[question];
    return <QuestionComponent formButtonHandler={formButtonHandler} />;
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Svg height={height} width={width}>
          <Image
            href={logoSrc}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMin meet"
            y={height / 7.5}
          />
          <Image
            href={goBackArrow}
            width={25}
            height={25}
            preserveAspectRatio="xMidYMin meet"
            y={height / 3.9}
            x={width / 7}
          />
        </Svg>
      </View>
      <Animated.View style={[{ flex: 2 }, formOneAnimatedStyle]} testID="view">
        {renderQuestionComponent()}
      </Animated.View>
    </View>
  );
};

export default FlowChart;