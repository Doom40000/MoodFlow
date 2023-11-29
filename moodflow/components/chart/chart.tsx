import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, View, Image } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import styles from './chartStyles';

const bottomLogo = require('../../assets/bottom-logo.png');
const logo = require('../../assets/logo.png');

const habitsList: string[] = [
  'Sleep quality',
  'Socialising',
  'Diet',
  'Staying hydrated',
  'Exercise',
];

const Chart = () => {
  let bouncyCheckboxRef: BouncyCheckbox | null = null;
  const [checkboxState, setCheckboxState] = useState(false);
  // send checkedItems to db to use for personalised flowChart.
  // check list state does not persist as not saved in db, but can be done later if needed
  const [checkedItems, setCheckedItems] = useState([]);

  const listItem = ({ item }: { item: string }) => {
    return (
      <SafeAreaView>
        <View>
          <BouncyCheckbox
            style={styles.listItem}
            textStyle={styles.textStyle}
            fillColor="white"
            ref={(ref: any) => (bouncyCheckboxRef = ref)}
            isChecked={checkboxState}
            text={item}
            onPress={() => {
              setCheckboxState(!checkboxState);
              setCheckedItems;
            }}
          />
        </View>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.img} source={logo} />
      </View>
      <View>
        <Text style={styles.text}>
          Please let us know at {'\n'}least three habits that {'\n'}affect your
          mood:{' '}
        </Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={habitsList}
          keyExtractor={(item) => item}
          renderItem={listItem}
        />
      </View>
      <View>
        <Image style={styles.bottom} source={bottomLogo} />
      </View>
    </SafeAreaView>
  );
};

export default Chart;
