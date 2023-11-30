import React, { useEffect, useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getJournalByIdController, deleteJournalEntryController } from '../../native-db/controllers/journal';

import styles from './styles';

const JournalEntry = ({ navigation }) => {
  const [ journalEntry, setJournalEntry ] = useState<any>({})

  useEffect(() => {
    fetchJournal();
  },[]);

  const fetchJournal = async () => {
    const result = await getJournalByIdController(1);
    setJournalEntry(result)
    console.log(journalEntry[0].title);
  };

  const deleteJournal = async () => {
    await deleteJournalEntryController(journalEntry[0].id);
    navigation.navigate('Journal')
  }

  const parseDate = (date: string) => {
    const formatedDate = new Date(date).toLocaleDateString('en-GB');
    return formatedDate;
  };

  return (
    <SafeAreaView style={styles.container}>
      {
        journalEntry ?
        <View>
          <Text style={styles.bigHeading}>{journalEntry[0].title}</Text>
          <Text style={styles.mediumHeading}>{parseDate(journalEntry[0].created_at)}</Text>
          <Text style={styles.paragraph}>{journalEntry[0].body}</Text>
        </View> :
        <View>
          <Text style={styles.bigHeading}>Journal entry doesn't exist</Text>
        </View>
      }
      
      <Pressable
        onPress={() => deleteJournal()}
        style={styles.buttonPrimary}
      >
        <Text style={styles.buttonTextPrimary}>Delete</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default JournalEntry;