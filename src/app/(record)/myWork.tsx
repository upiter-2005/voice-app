import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import settings from '@/src/assets/images/settings.png'
import vip from '@/src/assets/images/vip.png'
import empty from '@/src/assets/images/empty.png'
import { useIsFocused } from '@react-navigation/native'

const MyWork = () => {


  const isFocused = useIsFocused();
  useEffect(()=>{
    if(isFocused)console.log('works page')
  }, [isFocused])

  
  return (
    <View className='flex-1 bg-black flex-col ' >
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

          

          <View className='flex-1 flex-col justify-center items-center '>

              <Image source={empty}resizeMode='contain' className='w-[130px] h-[130px]'  />
              <Text className='text-white'>It’s empty</Text>

          </View>

      </View>
  )
}

export default MyWork