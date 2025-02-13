import { useGlobalContext } from "@/lib/GlobalContext";
import { Redirect, Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  const { loading, isLoaded, login } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full justify-center items-center">
        <ActivityIndicator className="text-primary-100" size="large" />
      </SafeAreaView>
    );
  }

  if (isLoaded) {
    return <Redirect href="/home" />;
  }

  return (
    <View className="bg-primary-100 h-full pt-20 gap-6">
      <StatusBar style="light" />

      <Slot />
    </View>
  );
}
