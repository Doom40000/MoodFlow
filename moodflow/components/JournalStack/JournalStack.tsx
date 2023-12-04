import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Journal from '../../screens/Journal/Journal';
import JournalEntry from '../../screens/JournalEntry/JournalEntry';

type JournalStackParamList = {
  Journals: undefined,
  JournalEntry: { entryId: number }
};

const Stack = createStackNavigator<JournalStackParamList>();

const JournalStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Journals' component={Journal} />
      <Stack.Screen name='JournalEntry' component={JournalEntry} />
    </Stack.Navigator>
  )
};

export default JournalStack;