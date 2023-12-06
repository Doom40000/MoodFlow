import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
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
          {/* <Text style={styles.quoteHeaderText}>
            Quote
          </Text> */}
        <Image style= {styles.quote1} source={require('../../assets/icons8-quote-left-50.png')} />
        <Text style={styles.quoteText}>{quote}</Text>
        <Image style= {styles.quote2} source={require('../../assets/icons8-get-quote-50.png')} />
      </View>
    </View>
  );
};

export default Home;
