import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
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
import Logo from '../../components/Logo/Logo';
import {
  getAllJournalsController,
  createJournalEntryController,
} from '../../native-db/controllers/journal';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../Settings/Settings';
import Resources from '../Resources/Resources';
import LogoutConfirmation from '../../api/Auth/Logout';

interface Journal {
  body: string;
  created_at: string;
  id: number;
  title: string;
}

const Journal: React.FC = ({ navigation }) => {
  const [journalEntries, setJournalEntries] = useState<Journal[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [entryTitle, setEntryTitle] = useState<string>('');
  const [entryBody, setEntryBody] = useState<string>('');

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchJournals();
    }
  }, [isFocused]);

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
      <Logo />
      <View style={styles.contentContainer}>
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
              <Pressable
                onPress={() => saveEntry()}
                style={styles.buttonPrimary}
              >
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
            renderItem={({ item }) => (
              <Pressable
                onPress={() =>
                  navigation.navigate('JournalEntry', { entryId: item.id })
                }
              >
                <JournalListItem
                  journalEntries={journalEntries}
                  setJournalEntries={setJournalEntries}
                  journalItem={item}
                />
              </Pressable>
            )}
          />
        ) : (
          <Text>No journal entries</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const Drawer = createDrawerNavigator();

const JournalDrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Journal" component={Journal} />
      <Drawer.Screen name="Profile" component={Settings} />
      <Drawer.Screen name="Resources" component={Resources} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Logout" component={LogoutConfirmation} />
    </Drawer.Navigator>
  );
};

export default JournalDrawerNavigator;
