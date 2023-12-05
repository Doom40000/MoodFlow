import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';
import Logo from '../../components/Logo/Logo';

const CreatePost: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.promptText}>Create your post here:</Text>
        <TextInput placeholder="useless placeholder" />
      </View>
    </View>
  );
};

export default CreatePost;
