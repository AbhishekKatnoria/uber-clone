import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
  return (
    <SafeAreaView className="flex h-full bg-white items-center justify-between">
      <TouchableOpacity onPress={() => router.replace("/(auth)/sign-up")}>
        <Text>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
