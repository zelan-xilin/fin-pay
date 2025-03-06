import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Message() {
  return (
    <View className="bg-neutral-600 h-full px-6 pt-20 gap-6">
      <StatusBar style="dark" />

      <Text className="heading-secondary text-neutral-100">Message</Text>
    </View>
  );
}
