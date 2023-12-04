import { Moment } from 'moment';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import CalendarPicker, {DateChangedCallback} from 'react-native-calendar-picker';
import DayChart from './DayChart';
import { receiveNodes } from '../../api/Feedback/feedback_api';
import styles from './CalendarStyles';

function formatDate(inputDate: Moment): string {
    const dateObject: Date = inputDate.toDate();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate: string = dateObject.toLocaleDateString('en-US', options);
    const splitDate = formattedDate.replace(/ /g, '').replace(',', '').split('');
    const day = splitDate.splice(3, 1);
    const date = splitDate.join('');
    const finalDate = `${day[0]}${date}`;
    return finalDate;
}

interface question{
  question: "question1",
  answer: "good"
}

const Calendar = () => {

  const onDateChange: DateChangedCallback  = (date) => {
    console.log(formatDate(date))
    // TODO type any to fix here (and add date parameter when controller fixed)
    const charts = date;

    return <DayChart charts={charts}/>
  }

  return (
    <View style={styles.container}>
      <CalendarPicker
        selectedDayColor= 'white'
        todayBackgroundColor= 'pink'
        textStyle= 'white'
        onDateChange={onDateChange}

      />
    </View>
  );
}

export default Calendar;