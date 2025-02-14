import { icon } from "@/constants/assets";
import colors from "@/constants/colors";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Information() {
  return (
    <View className="bg-neutral-600 h-full px-6 pt-20 gap-6">
      <StatusBar style="dark" />

      <Pressable
        onPress={() => router.back()}
        className="flex-row gap-4 items-center"
      >
        <Image
          source={icon.icon39}
          className="size-4"
          resizeMode="contain"
          tintColor={colors.neutral[100]}
        />

        <Text className="heading-secondary text-neutral-100">
          App information
        </Text>
      </Pressable>

      <View className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="py-4 flex-row justify-between items-center">
            <Text className="body-primary text-neutral-100">
              Date of manufacture
            </Text>
            <Text className="heading-tertiary text-primary-100">Dec 2019</Text>
          </View>
          <View className="h-[1px] bg-neutral-500"></View>

          <View className="py-4 flex-row justify-between items-center">
            <Text className="body-primary text-neutral-100">Version</Text>
            <Text className="heading-tertiary text-primary-100">9.0.2</Text>
          </View>
          <View className="h-[1px] bg-neutral-500"></View>

          <View className="py-4 flex-row justify-between items-center">
            <Text className="body-primary text-neutral-100">Language</Text>
            <Text className="heading-tertiary text-primary-100">Chinese</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
