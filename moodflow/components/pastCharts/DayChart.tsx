import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { store } from '../../store/store';
import DayChartItem from './DayChartItem';

interface question {
  question: string,
  answer: string
}

const DayChart = ({charts}:{charts: question[]}) => {
  return(
    <View >
    <FlatList
      data={charts}
      keyExtractor={(item) => item.question}
      renderItem={({ item }) => (
        <DayChartItem
          question={item.question}
          answer={item.answer}
        />
      )}
    />
  </View>
  )
}

export default DayChart;
