import React, { useEffect, useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  getJournalByIdController,
  deleteJournalEntryController,
} from '../../native-db/controllers/journal';

import styles from './styles';

interface Journal {
  body: string;
  created_at: string;
  id: number;
  title: string;
}

const JournalEntry = ({ route, navigation }) => {
  const [journalEntry, setJournalEntry] = useState<Journal[] | []>([]);

  const { entryId } = route.params;

  useEffect(() => {
    fetchJournal();
  }, []);

  const fetchJournal = async () => {
    const result = await getJournalByIdController(entryId);
    setJournalEntry(result);
  };

  const deleteJournal = async () => {
    await deleteJournalEntryController(journalEntry[0].id);
    navigation.navigate('Journals');
  };

  const parseDate = (date: string) => {
    const formatedDate = new Date(date).toLocaleDateString('en-GB');
    return formatedDate;
  };

  return (
    <SafeAreaView style={styles.container}>
      {journalEntry.length ? (
        <View>
          <Text style={styles.bigHeading}>{journalEntry[0].title}</Text>
          <Text style={styles.mediumHeading}>
            {parseDate(journalEntry[0].created_at)}
          </Text>
          <Text style={styles.paragraph}>{journalEntry[0].body}</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.bigHeading}>Journal entry doesn't exist</Text>
        </View>
      )}
      <Pressable onPress={() => deleteJournal()} style={styles.buttonPrimary}>
        <Text style={styles.buttonTextPrimary}>Delete</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default JournalEntry;
