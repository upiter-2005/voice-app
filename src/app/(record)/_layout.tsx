import { StyleSheet, Text, View, Image, ImagePropsBase } from 'react-native'
import { Tabs } from 'expo-router';
import React from 'react';



export default function RecordLayout() {
 
  
  return (
   <>
   <Tabs
        screenOptions={{
         tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "transparent",
            // borderTopWidth: 1,
            // borderTopColor: "#232533",
            borderTopWidth: 0,
            height: 74,
            paddingBottom: 10,
            paddingTop: 10,
            elevation: 10
          },
        }}

      >
        <Tabs.Screen
          name="record"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Image
                source={require('../../assets/images/recordIco.png')}
                className={`w-[121px] h-[58px] rounded-2xl opacity-50  ${focused && 'opacity-100'}`}
              />
            )
          }}
        />
        <Tabs.Screen
          name="aiCover"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Image
                source={require('../../assets/images/aiIco.png')}
                className={`w-[121px] h-[58px] rounded-2xl opacity-50 ${focused && 'opacity-100'}`}
              />
            )
          }}
        />
        <Tabs.Screen
          name="myWork"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('../../assets/images/worksIco.png')}
              className={`w-[121px] h-[58px] rounded-2xl opacity-50 ${focused && 'opacity-100'}`}
            />
            )
          }}
        />
       
      </Tabs>
   </>

   
  );
}
