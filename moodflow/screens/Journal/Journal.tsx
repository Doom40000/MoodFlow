import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  FlatList,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import JournalListItem from '../../components/JournalListItem/JournalListItem';
import JournalEntry from '../JournalEntry/JournalEntry';
import {
  getAllJournalsController,
  createJournalEntryController,
} from '../../native-db/controllers/journal';

const Stack = createStackNavigator();

interface Journal {
  body: string;
  created_at: string;
  id: number;
  title: string;
}

const Journal = () => {
  const [journalEntries, setJournalEntries] = useState<any>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [entryTitle, setEntryTitle] = useState<string>('');
  const [entryBody, setEntryBody] = useState<string>('');

  useEffect(() => {
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    const result = await getAllJournalsController();
    setJournalEntries(result);
  };

  const saveEntry = async () => {
    if (!entryBody || !entryTitle) return;
    await createJournalEntryController(entryTitle, entryBody);
    await fetchJournals();
    setEntryTitle('');
    setEntryBody('');
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.bigHeading}>Your Journal</Text>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.noteButton}
        >
          <Text style={styles.buttonTextPrimary}>+</Text>
        </Pressable>
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View>
            <Text style={styles.bigHeading}>Add journal entry ✍️</Text>
          </View>
          <View>
            <Text style={styles.mediumHeading}>Add a title</Text>
            <TextInput
              style={styles.smallInput}
              onChangeText={(text) => setEntryTitle(text)}
              defaultValue={entryTitle}
            />
          </View>
          <View>
            <Text style={styles.mediumHeading}>Add your thoughts</Text>
            <TextInput
              editable
              multiline
              style={styles.bigInput}
              onChangeText={(text) => setEntryBody(text)}
              defaultValue={entryBody}
            />
          </View>
          <View>
            <Pressable onPress={() => saveEntry()} style={styles.buttonPrimary}>
              <Text style={styles.buttonTextPrimary}>Save thought</Text>
            </Pressable>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.buttonSecondary}
            >
              <Text style={styles.buttonTextSecondary}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {journalEntries ? (
        <FlatList
          data={journalEntries}
          renderItem={({ item }) => <JournalListItem journalItem={item} />}
        />
      ) : (
        <Text>No journal entries</Text>
      )}
    </SafeAreaView>
  );
};

export default Journal;
