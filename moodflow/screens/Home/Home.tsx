import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import Svg, { Image } from 'react-native-svg';

import styles from './styles';

const imageSrc = require('../../assets/MoodFlowLogo.png');

const Home = () => {
  const { height, width } = Dimensions.get('window');
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
      <View style={{ flex: 1 }}>
        <Svg height={height} width={width}>
          <Image
            testID="Logo"
            href={imageSrc}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMin meet"
            y={height / 7.5}
          />
        </Svg>
      </View>
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
