import React from 'react';
import { Text, View, Pressable } from 'react-native';

import { deleteJournalEntryController } from '../../native-db/controllers/journal';
import styles from './styles';

interface Journal {
  body: string;
  created_at: string;
  id: number;
  title: string;
}

interface JournalListItemProps {
  journalEntries: Journal[]
  setJournalEntries: React.Dispatch<React.SetStateAction<Journal[]>>
  journalItem: Journal;
}

const parseDate = (date: string) => {
  const formatedDate = new Date(date).toLocaleDateString('en-GB');
  return formatedDate;
};

const JournalListItem: React.FC<JournalListItemProps> = ({ journalEntries, setJournalEntries, journalItem }) => {

  const deleteJournal = async () => {
    await deleteJournalEntryController(journalItem.id);
    setJournalEntries(journalEntries.filter(e => e.id !== journalItem.id))
  }

  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.mediumHeading}>{journalItem.title}</Text>
      <Text style={styles.paragraph}>{journalItem.body}</Text>
      <Text style={styles.date}>{parseDate(journalItem.created_at)}</Text>
      <Pressable
        onPress={() => deleteJournal()}
      >
        <Text style={styles.delete}>Delete</Text>
      </Pressable>
    </View>
  );
};

export default JournalListItem;
