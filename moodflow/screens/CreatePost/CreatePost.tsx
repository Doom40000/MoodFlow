import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from './styles';
import { postMessage } from '../../api/Auth/tokenRetrieval';
import Logo from '../../components/Logo/Logo';

const CreatePost: React.FC = () => {
  const [postText, setPostText] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('Yourself');

  const handleSubmitPost = async () => {
    await postMessage(postText);
    setPostText('');
  };

  const updatePostText = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const value = e.nativeEvent.text;
    setPostText(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.promptText}>Create your post here:</Text>
        <TextInput
          style={styles.postInput}
          placeholder="What's on your mind?"
          multiline
          numberOfLines={8}
          value={postText}
          onChange={updatePostText}
        />
        <View style={styles.radioGroup}>
          <TouchableOpacity onPress={handleSubmitPost}>
            <Text>New Post</Text>
          </TouchableOpacity>
          <Text style={styles.separator}>|</Text>
          <View style={styles.radioButton}>
            <Text style={styles.radioLabel}>Global</Text>
            <RadioButton.Android
              value="Yourself"
              status={selectedRadio === 'Yourself' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedRadio('Yourself')}
              color="#007BFF"
            />
          </View>

          <View style={styles.radioButton}>
            <Text style={styles.radioLabel}>Follow</Text>
            <RadioButton.Android
              value="Anonymous'"
              status={selectedRadio === 'Anonymous' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedRadio('Anonymous')}
              color="#007BFF"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreatePost;
