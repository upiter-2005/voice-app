import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Redirect, router } from "expo-router"
import React from 'react';

const App = () => {

  return (

  
      <ScrollView className='flex-1'>
        <Text className='text-red-600 font-bold text-center mt-3 px-5'>Where creative meets innovation: welcome to aura app developers!</Text>
        <TouchableOpacity onPress={()=> router.push('/steps')} >
          <Text>Step 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> router.push('/record')} >
          <Text>Record</Text>
        </TouchableOpacity>

        <View className='h-[300px] justify-between flex-row'>
          <View className='w-20  bg-red-700'><Text>Text 1</Text></View>
          <View className='w-20  bg-green-700'><Text>Text 1</Text></View>
          <View className='w-20  bg-blue-700'><Text>Text 1</Text></View> 
        </View>
        
        <TouchableOpacity onPress={()=> router.push('/search/20')}><Text>Pressssss</Text></TouchableOpacity>
      </ScrollView>
     
   
  );
}

export default App


