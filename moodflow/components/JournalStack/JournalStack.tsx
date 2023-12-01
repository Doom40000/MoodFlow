import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Journal from '../../screens/Journal/Journal';
import JournalEntry from '../../screens/JournalEntry/JournalEntry';

const Stack = createStackNavigator();

const JournalStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Journal' component={Journal} />
      <Stack.Screen name='JournalEntry' component={JournalEntry} />
    </Stack.Navigator>
  )
};

export default JournalStack;