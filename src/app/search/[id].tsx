import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';


export default function StepItem() {
  const params = useLocalSearchParams();

  return (
    
      <View className='h-full'>
       <Text>Step page {params.id}</Text>
      </View>
   
    
  );
}


