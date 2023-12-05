import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';

import { Text, View, TouchableOpacity } from 'react-native';


import styles from './styles';
import { RootStackParamList } from '../../components/HomeStack/HomeStack';
import Logo from '../../components/Logo/Logo';


type createPostProp = StackNavigationProp<RootStackParamList, 'CreatePost'>;

const Home: React.FC = () => {
  const [quote, setQuote] = useState('');
  const navigation = useNavigation<createPostProp>();
  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const url = 'https://zenquotes.io/api/today';

  // Doesn't work in webview, only on native device (CORS Policy)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const dataInJson = await data.json();
        setQuote(dataInJson[0].q + '\n-' + dataInJson[0].a);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSocialIconPress = () => {
    navigation.navigate('CreatePost');
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.quoteContainer}>
        <View style={styles.quoteHeader}>
          <Text style={styles.quoteHeaderText}>
            Here is your quote of the day:
          </Text>
        </View>
        <Text style={styles.quoteText}>{quote}</Text>

      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleSocialIconPress}>
          <Ionicons name="people" size={64} color="white" />
          <Text style={styles.iconText}>Social</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
