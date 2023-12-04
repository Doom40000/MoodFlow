import { Moment } from 'moment';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import CalendarPicker, {
  DateChangedCallback,
} from 'react-native-calendar-picker';
import DayChart from './DayChart';
import { receiveNodes } from '../../api/Feedback/feedback_api';
import styles from './CalendarStyles';

function formatDate(inputDate: Moment): string {
  const dateObject: Date = inputDate.toDate();
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formattedDate: string = dateObject.toLocaleDateString('en-US', options);
  const splitDate = formattedDate.replace(/ /g, '').replace(',', '').split('');
  const day = splitDate.splice(3, 1);
  const date = splitDate.join('');
  const finalDate = `${day[0]}${date}`;
  return finalDate;
}

interface question {
  question: 'question1';
  answer: 'good';
}

const Calendar = () => {
  const onDateChange: DateChangedCallback = async (date) => {
    // TODO type any to fix here (and add date parameter when controller fixed)
    // Heyhey :) finalDate currently returns some weird values sometimes

    // const dateString = formatDate(date);

    console.log(formatDate(date));
    const dateString = '4dec2023';
    const fetchChart = async () => {
      const data = await fetch(
        `http://192.168.188.42:3001/getReq/${dateString}`,
      );
      const parsedData = await data.json();
      console.log('parsed Data: ', parsedData);
      return parsedData;
    };
    const charts = await fetchChart();

    return <DayChart charts={charts} />;
  };

  return (
    <View style={styles.container}>
      <CalendarPicker
        selectedDayColor="white"
        todayBackgroundColor="pink"
        onDateChange={onDateChange}
      />
    </View>
  );
};

export default Calendar;
