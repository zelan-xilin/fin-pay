import { images } from "@/constants/assets";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Search() {
  return (
    <View className="bg-neutral-600 h-full pt-20 gap-6">
      <StatusBar style="dark" />

      <Text className="heading-secondary text-neutral-100 px-6">Search</Text>

      <View className="flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="gap-6 px-6 pt-6"
        >
          <Pressable
            className="flex-row justify-between p-6 rounded-2xl card-effect-sm"
            onPress={() => router.push("/branch")}
          >
            <View className="gap-6">
              <Text className="heading-tertiary text-neutral-100">Branch</Text>
              <Text className="caption-secondary text-neutral-200">
                Search for branch
              </Text>
            </View>
            <Image
              source={images.branch}
              className="size-32"
              resizeMode="contain"
            />
          </Pressable>

          <Pressable
            className="flex-row justify-between p-6 rounded-2xl card-effect-sm"
            onPress={() => router.push("/interest-rate")}
          >
            <View className="gap-6">
              <Text className="heading-tertiary text-neutral-100">
                Interest rate
              </Text>
              <Text className="caption-secondary text-neutral-200">
                Search for interest rate
              </Text>
            </View>
            <Image
              source={images.interestRate}
              className="size-32"
              resizeMode="contain"
            />
          </Pressable>

          <Pressable
            className="flex-row justify-between p-6 rounded-2xl card-effect-sm"
            onPress={() => router.push("/exchange-rate")}
          >
            <View className="gap-6">
              <Text className="heading-tertiary text-neutral-100">
                Exchange rate
              </Text>
              <Text className="caption-secondary text-neutral-200">
                Search for exchange rate
              </Text>
            </View>
            <Image
              source={images.exchangeRate}
              className="size-32"
              resizeMode="contain"
            />
          </Pressable>

          <Pressable
            className="flex-row justify-between p-6 rounded-2xl card-effect-sm"
            onPress={() => router.push("/exchange")}
          >
            <View className="gap-6">
              <Text className="heading-tertiary text-neutral-100">
                Exchange
              </Text>
              <Text className="caption-secondary text-neutral-200">
                Exchange amount of money
              </Text>
            </View>
            <Image
              source={images.exchange}
              className="size-32"
              resizeMode="contain"
            />
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
}
