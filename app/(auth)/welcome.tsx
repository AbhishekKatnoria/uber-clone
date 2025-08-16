import { router } from "expo-router";
import React, { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
export default function Welcome() {
  const swiperRef = useRef<Swiper>(null);
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
      >
        <View>
          <Text>hello 1</Text>
        </View>
        <View>
          <Text>hello 2</Text>
        </View>
        <View>
          <Text>hello 3</Text>
        </View>
      </Swiper>
    </SafeAreaView>
  );
}
