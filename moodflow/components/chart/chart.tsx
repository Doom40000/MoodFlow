import React, {useState} from "react";
import { SafeAreaView, FlatList, Text, View, Pressable } from 'react-native';
import styles from "./chartStyles";
import ListItem from "./listItem";

const habitsList: string[] = [
   'Sleep quality',
   'Socialising',
   'Diet',
   'Staying hydrated',
   'Exercise'
  ];

const Chart = () => {
  // send checkedItems to db to use for personalised flowChart.
  // check list state does not persist as not saved in db, but can be done later if needed
  const [checkedItems, setCheckedItems] = useState<string[]>([]);


  return (
    <SafeAreaView style= {styles.container}>
      <View  >
        <Text style={styles.text} >Please let us know at {"\n"}least three habits that {"\n"}affect your mood: </Text>
      </View>
      <View style = {styles.list}>
        <FlatList
            data= {habitsList}
            keyExtractor={( item ) => item}
            renderItem={({item}) => <ListItem item={item} checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>} />
      </View>
      <Pressable style={styles.press} onPress={() => (console.log('pressed'))}>
        <Text style={styles.buuttonText}>Finish</Text>
      </Pressable>
    </SafeAreaView>
  )
}



export default Chart;
