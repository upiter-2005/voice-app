import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import settings from '@/src/assets/images/settings.png'
import vip from '@/src/assets/images/vip.png'

import importIco from '@/src/assets/images/import.png'
import record from '@/src/assets/images/record.png'

import ball from '@/src/assets/images/ball.png'
import { useIsFocused } from '@react-navigation/native'

const Record = () => {
  
  const isFocused = useIsFocused();
  useEffect(()=>{
    if(isFocused)console.log('record page')
  }, [isFocused])

  return (
    
      <ScrollView className='flex-1 bg-black flex-col ' >
          <View className='flex-4 flex-row justify-between px-5 pt-2'>
            <TouchableOpacity onPress={()=>{}}>
              <Image
                source={settings}
                resizeMode='contain'
                className='w-12 h-12'
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}>
              <Image
                source={vip}
                resizeMode='contain'
                className='w-12 h-12'
              />
            </TouchableOpacity>
          </View>

          <View className='flex-1 items-center flex-col'>
            <Image 
              source={ball}
              className='w-[293px] h-[293px]'
              resizeMode='contain'
            />
            <Text className='text-6xl text-white mb-[100px]'>00:00</Text>
          </View>

          <View className='flex-1 flex-row justify-between max-w-[340px] px-3 mx-auto gap-16 '>

            <TouchableOpacity onPress={()=>{}} className='flex-col items-center justify-center' >
              <Image
                source={importIco}
                resizeMode='contain'
                className='w-[74px] h-[74px]'
              />
              <Text className='text-white'>Import</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}} className='flex-col items-center justify-center' >
              <Image
                source={record}
                resizeMode='contain'
                className='w-[74px] h-[74px]'
              />
              <Text className='text-white'>Tap to Record</Text>
            </TouchableOpacity>

          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{isFocused ? 'focused' : 'unfocused'}</Text>
          </View>

      </ScrollView>
      
    
    
  )
}

export default Record