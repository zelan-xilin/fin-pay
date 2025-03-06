import { icon } from "@/constants/assets";
import colors from "@/constants/colors";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function InterestRate() {
  return (
    <View className="bg-neutral-600 h-full pt-20 gap-6">
      <Pressable
        onPress={() => router.back()}
        className="flex-row px-6 gap-4 items-center"
      >
        <Image
          source={icon.icon39}
          className="size-4"
          resizeMode="contain"
          tintColor={colors.neutral[100]}
        />

        <Text className="heading-secondary text-neutral-100">
          Interest rate
        </Text>
      </Pressable>

      <View className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
      </View>
    </View>
  );
}
