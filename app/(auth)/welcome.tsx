import { onboarding } from "@/contants";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
export default function Welcome() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <SafeAreaView className="flex h-full bg-white items-center justify-between">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className=" text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-[2px]" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#2F74FA] rounded-[2px]" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding?.map((item, index) => (
          <View key={index} className="flex justify-center items-center mt-3">
            <Image
              source={item?.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row justify-center items-center mt-10 text-black">
              <Text className="font-bold text-3xl mx-10 text-center">
                {" "}
                {item?.title}
              </Text>
            </View>
            <Text className="font-JakartaSemiBold text-lg mx-10 text-center mt-3 text-[#858585]">
              {" "}
              {item?.description}
            </Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
}
