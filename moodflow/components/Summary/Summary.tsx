import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, View, Pressable } from 'react-native';

const SummaryPage = (state: any) => {
  const summary: string = '';
  const suggestions: string = '';

  return (
    <SafeAreaView>
      <View>
        <Text>It looks like today you {summary}</Text>
      </View>
      <View>
        <Text>We suggest that you try {suggestions}</Text>
      </View>
    </SafeAreaView>
  );
};
