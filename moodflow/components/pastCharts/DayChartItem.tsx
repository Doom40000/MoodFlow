import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, View, Pressable } from 'react-native';
import { store } from '../../store/store';

let questionText = '';
let answerText = '';

function getQuestion(question: string, answer: string){
  if (question === 'question1'){
    questionText = "Feelings: ";
    answerText = answer;
  }else if(question === 'question2'){
     questionText = "Food: ";
     answerText = answer;
  }else if(question === 'question3'){
    questionText = "Exercise: ";
    answerText = answer;
  }else if(question === 'question4'){
    questionText = "Sleep: ";
    answerText= answer;
  }else if(question === 'question5'){
    questionText = "Social: ";
    answerText= answer;
  }else if(question === 'question6'){
    questionText = "Activities: ";
    answerText= answer;
  }else{
    questionText = "Positive thought: ";
    answerText= answer;
  }
}


const DayChartItem = ({question, answer}: {question: string, answer: string}) => {

getQuestion(question, answer);

  return(
    <View>
       <View>
        <Text>{questionText}</Text>
      </View>
      <View>
        <Text>{answerText}</Text>
      </View>
    </View>

  )
}


export default DayChartItem;
