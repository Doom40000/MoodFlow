import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import Logo from '../../components/Logo/Logo';
const Home = () => {
  const [quote, setQuote] = useState('');

  const url = 'https://zenquotes.io/api/quotes';

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

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.quoteContainer}>
        <View style={styles.quoteHeader}>
          <Text style={styles.quoteHeaderText}>
            Here is your quote of the day:
          </Text>
        </View>
        {/* <View style={styles.quote}> */}
        <Text style={styles.quoteText}>{quote}</Text>
        {/* </View> */}
      </View>
    </View>
  );
};

export default Home;
