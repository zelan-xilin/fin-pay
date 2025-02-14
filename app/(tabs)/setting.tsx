import { icon, images } from "@/constants/assets";
import colors from "@/constants/colors";
import { useGlobalContext } from "@/lib/GlobalContext";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Setting() {
  const { user, logout } = useGlobalContext();
  const onLogout = () => {
    logout(), router.push("/sign-in");
  };

  return (
    <View className="bg-primary-100 h-full pt-20 gap-6">
      <StatusBar style="light" />

      <Text className="heading-secondary text-neutral-600 px-6">Setting</Text>

      <View className="flex-1 mt-12 pt-16 rounded-t-3xl bg-neutral-600 relative">
        <Image
          source={images.account}
          className="size-24 absolute left-1/2 -top-12 -translate-x-1/2"
          resizeMode="contain"
        />

        <Text className="text-center heading-tertiary text-primary-100">
          {user?.account}
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="px-6 pt-6"
        >
          <Pressable
            className="py-4 flex-row justify-between items-center"
            onPress={() => router.push("/password")}
          >
            <Text className="body-primary text-neutral-100">Password</Text>
            <Image
              source={icon.icon38}
              className="size-4"
              resizeMode="contain"
              tintColor={colors.neutral[500]}
            />
          </Pressable>
          <View className="h-[1px] bg-neutral-500"></View>

          <Pressable
            className="py-4 flex-row justify-between items-center"
            onPress={() => router.push("/language")}
          >
            <Text className="body-primary text-neutral-100">Language</Text>
            <Image
              source={icon.icon38}
              className="size-4"
              resizeMode="contain"
              tintColor={colors.neutral[500]}
            />
          </Pressable>
          <View className="h-[1px] bg-neutral-500"></View>

          <Pressable
            className="py-4 flex-row justify-between items-center"
            onPress={() => router.push("/information")}
          >
            <Text className="body-primary text-neutral-100">
              App information
            </Text>
            <Image
              source={icon.icon38}
              className="size-4"
              resizeMode="contain"
              tintColor={colors.neutral[500]}
            />
          </Pressable>
          <View className="h-[1px] bg-neutral-500"></View>

          <Pressable
            className="py-4 flex-row justify-between items-center"
            onPress={onLogout}
          >
            <Text className="body-primary text-semantic-100">Logout</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
}
