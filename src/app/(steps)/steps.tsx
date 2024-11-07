import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, View, Text, TouchableOpacity, SafeAreaView, Dimensions, ImageBackground, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import step1 from '@/src/assets/images/step1.png'
import step2 from '@/src/assets/images/step2.png'
import step3 from '@/src/assets/images/step3.png'
import step4 from '@/src/assets/images/step4.png'

import Carousel from 'react-native-reanimated-carousel';
import type { ICarouselInstance } from "react-native-reanimated-carousel";

export default function Step1() {
  const data = [
    {title: "Welcome to VoiceMe!", img: step1},
    {title: "Record friend's or celeb's voices", img: step2},
    {title: "Write text for that voice", img: step3},
    {title: "Done! Send funny phrases in their voices. Enjoy!", img: step4},
  ]
  const ref = React.useRef<ICarouselInstance>(null);
  const renderItem = ({item}: {item: any}) => {
 

    return (
     
      <ImageBackground 
        source={item.img}
        className='bg-black text-white w-full h-full flex items-center justify-center relative '
        resizeMode='cover'
      >
        <View className='absolute top-[60px] z-20 max-w-[315px] text-center'>
          <Text className='text-xl text-[#DECAFF] text-center font-[SF-Pro-Text-HeavyItalic]'>How to use</Text>
          <Text className='text-white text-center text-[32px] font-[SF-Pro-Text-HeavyItalic]' >{item.title}</Text> 
        </View>
        <View className='absolute bottom-20 left-0 w-full flex flex-row justify-center items-center z-20 gap-3 px-2'>
          
          <TouchableOpacity
            className='bg-transparent p-4 rounded-2xl w-[100px] border-white border-2  '
            activeOpacity={0.7}
            onPress={()=>router.push('/')}
          >
            <Text className='text-2xl text-white text-center'>Skip</Text>
          </TouchableOpacity>

          <View className='shadow-2xl shadow-black flex-1 rounded-xl overflow-hidden'>
            <LinearGradient
                colors={['#00A3FF', '#CC00FF']}
                start={{ x: 1, y: .5 }}
                end={{ x: 0, y: .5 }}
              >
                <TouchableOpacity
                  className='p-4 w-full h-full'
                  activeOpacity={0.6}
                  onPress={()=>ref.current?.next()}
                >
                  <Text className='text-2xl text-white text-center'>Next</Text>
                </TouchableOpacity> 
            </LinearGradient>
          </View>
          
        </View>
      </ImageBackground>
    );
  };

  return (
    <SafeAreaView >
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <Carousel
          ref={ref}
          loop={false} // Enables infinite looping of the carousel
          width={Dimensions.get('window').width} // Width of each item in the carousel
          height={Dimensions.get('window').height} // Height of the carousel
          data={data} // Data to be rendered in the carousel
          autoPlay={false} // Automatically starts playing the carousel
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          pagingEnabled
          scrollAnimationDuration={1000} // Duration of the scrolling animation
          onSnapToItem={(index: number) => console.log('current index:', index)} // Callback function triggered when an item is snapped to
          renderItem={renderItem} // Function to render each item in the carousel
          
        />
      </ScrollView>
    </SafeAreaView>
    
  );
}


