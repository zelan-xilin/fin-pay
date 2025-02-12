import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function TabsLayout() {
  return (
    <View>
      <Text className="text-3xl my-6">tabs layout</Text>
      <Slot />
    </View>
  );
}
