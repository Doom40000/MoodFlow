import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions } from 'react-native';
import Svg, { Image } from 'react-native-svg';

import styles from './styles';

const imageSrc = require('../../assets/MoodFlowLogo.png');

const Home = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, [])

  const { height, width } = Dimensions.get('window');

  const fetchQuote = async () => {
    const response = await fetch("https://zenquotes.io/api/random/");
    const quoteRes = await response.json();
    const author = quoteRes[0].a
    const quoteBody = quoteRes[0].q
    const formatedQuote = `"${quoteBody}" ${author}`
    setQuote(formatedQuote);
  }

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
        <Text style={styles.quoteText}>
          {quote}
        </Text>
        {/* </View> */}
      </View>
    </View>
  );
};

export default Home;
