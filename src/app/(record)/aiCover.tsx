import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

const AiCover = () => {
  const [title, setTitle] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const isFocused = useIsFocused()
  useEffect(()=>{
    if(isFocused)console.log('AI page')
  }, [isFocused])
  return (
    <ScrollView className='flex-1 flex-col bg-black px-5'>

      <View className='pt-5'>
        <Text className='text-white mb-1'>Title</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder='Click to enter text'
          className='w-full border border-[#0E152B] bg-[#0d1425] py-[18px] px-[10px] rounded-[10px] text-white'
        />
      </View>

      <View className='pt-5'>
        <Text className='text-white mb-1'>Add text</Text>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder='Click to enter text'
          className='w-full border border-[#0E152B] bg-[#0d1425] py-[18px] px-[10px] rounded-[10px] text-white h-[140px]'
          multiline={true}
          numberOfLines={7}
        />
      </View>

    </ScrollView>
  )
}

export default AiCover