import { Moment } from 'moment';
import React, { useState } from 'react';
import { View, ViewStyle } from 'react-native';
import CalendarPicker, {
  DateChangedCallback,
} from 'react-native-calendar-picker';

import styles from './CalendarStyles';
import DayChart from './DayChart';
import { receiveNodes } from '../../api/Feedback/feedback_api';

function formatDate(inputDate: Moment): string {
  const dateObject: Date = inputDate.toDate();
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formattedDate: string = dateObject.toLocaleDateString('en-US', options);
  const splitDate = formattedDate.replace(/ /g, '').replace(',', '').split('');
  let day = '';
  splitDate.length === 8
    ? (day = splitDate.splice(3, 1).join(''))
    : (day = splitDate.splice(3, 2).join(''));
  const date = splitDate.join('');
  const finalDate = `${day}${date}`;
  return finalDate;
}

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);
  const [charts, setCharts] = useState<any[]>([]); // Adjust the type based on your data structure

  const onDateChange: DateChangedCallback = async (date) => {
    const dateString = formatDate(date);
    const newCharts = await receiveNodes(dateString);
    setCharts(newCharts);
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <CalendarPicker
        selectedDayColor="white"
        todayBackgroundColor="pink"
        onDateChange={onDateChange}
      />
      {selectedDate && <DayChart charts={charts} />}
    </View>
  );
};

export default Calendar;
