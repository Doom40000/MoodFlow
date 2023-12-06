import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

import styles from './styles';
import { postMessage } from '../../api/Auth/tokenRetrieval';
import Logo from '../../components/Logo/Logo';

const CreatePost: React.FC = () => {
  const [postText, setPostText] = useState('');

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
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitPost}
        >
          <Text style={styles.submitText}>Submit post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePost;
