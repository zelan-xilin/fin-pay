import { useGlobalContext } from "@/lib/GlobalContext";
import { Redirect } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
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
    <View>
      <Text>sign in</Text>
    </View>
  );
}
