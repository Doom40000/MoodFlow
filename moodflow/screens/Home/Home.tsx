import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

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
        {/* <Text style={styles.quoteHeaderText}>
            Quote
          </Text> */}
        <Image
          style={styles.quote1}
          source={require('../../assets/icons8-quote-left-50.png')}
        />
        <Text style={styles.quoteText}>{quote}</Text>
        <Image
          style={styles.quote2}
          source={require('../../assets/icons8-get-quote-50.png')}
        />
      </View>
    </View>
  );
};

export default Home;
