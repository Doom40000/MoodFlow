import React from 'react';
import { FlatList, View } from 'react-native';

import DayChartItem from './DayChartItem';
import styles from './DayChartStyles';

interface question {
  answerText: string;
  date: string;
  questionNumber: string;
}

const DayChart = ({ charts }: { charts: question[] }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={charts}
        keyExtractor={(item) => item.questionNumber}
        renderItem={({ item }) => (
          <DayChartItem
            question={item.questionNumber}
            answer={item.answerText}
          />
        )}
      />
    </View>
  );
};

export default DayChart;
