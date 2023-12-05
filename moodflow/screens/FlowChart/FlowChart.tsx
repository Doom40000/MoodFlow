import React, { useState } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';

import { receiveNodes } from '../../api/Feedback/feedback_api';
import DayQuestion from '../../components/FlowChartComponents/DayQuestion';
import DietQuestion from '../../components/FlowChartComponents/DietQuestion';
import ExerciseQuestion from '../../components/FlowChartComponents/ExerciseQuestion';
import SleepQuestion from '../../components/FlowChartComponents/SleepQuestion';
import SocialisingQuestion from '../../components/FlowChartComponents/SocialisingQuestion';
import ActivityQuestion from '../../components/FlowChartComponents/ActivityQuestion';
import PositivityQuestion from '../../components/FlowChartComponents/Positivity';

import Logo from '../../components/Logo/Logo';
import Chart from '../../components/chart/chart';
import Feedback from '../Feedback/Feedback';
import styles from '../Home/styles';
// Import all the components, pass one of them into the state, setting the state as the first questions.
// When you push the button, you record the result and set the state with the next index in the array.
// Components = [1,2,3,4,5,6,7]


const flowChartQuestions = [
  Chart,
  DayQuestion,
  DietQuestion,
  ExerciseQuestion,
  SleepQuestion,
  SocialisingQuestion,
  ActivityQuestion,
  PositivityQuestion,
  Feedback,
];


type FormButtonHandlerType = () => void;
export interface QuestionProps {
  formButtonHandler: FormButtonHandlerType;
}

const FlowChart = () => {
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
      <Logo />
      <Animated.View style={[{ flex: 2 }, formOneAnimatedStyle]} testID="view">
        {renderQuestionComponent()}
      </Animated.View>
    </View>
  );
};

export default FlowChart;
