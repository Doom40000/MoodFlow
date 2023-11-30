import React, {useState} from "react";
import { SafeAreaView, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "./chartStyles";


const ListItem = ({ item, checkedItems, setCheckedItems }: {item: string, checkedItems: string[], setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>}) => {
    let bouncyCheckboxRef: BouncyCheckbox | null = null;

    const [checkboxState, setCheckboxState] = useState<boolean>(false);

    const onPress = (item: string) => {
      if(checkboxState === false){
        setCheckboxState(true);
        setCheckedItems(prevState => (
          [...prevState, item]))
      }else{
        setCheckboxState(!checkboxState);
         const index: number = checkedItems.indexOf(item);
         const newState = checkedItems.filter((el) => checkedItems.indexOf(el) !== index);
         setCheckedItems(newState);
      }

    }

    return (
      <SafeAreaView>
        <View >
          <BouncyCheckbox
          style={styles.listItem}
          textStyle={styles.textStyle}
          fillColor="white"
          ref={(ref: any) => (bouncyCheckboxRef = ref)}
          isChecked={checkboxState}
          text={item}
          onPress={() => onPress(item)}
          />
        </View>
      </SafeAreaView>
      )
    }


export default ListItem;
