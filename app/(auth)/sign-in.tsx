import { icon, setting } from "@/constants/assets";
import colors from "@/constants/colors";
import { useGlobalContext } from "@/lib/GlobalContext";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function SignIn() {
  const { login } = useGlobalContext();
  const [user, setUser] = useState({ account: "", password: "" });
  const onLogin = () => {
    if (!user.account || !user.password) {
      return;
    }

    login(user.account, user.password);
  };

  return (
    <>
      <Pressable
        onPress={() => router.push("/sign-up")}
        className="flex-row px-6 gap-4 items-center"
      >
        <Image
          source={icon.icon39}
          className="size-4"
          resizeMode="contain"
          tintColor={colors.neutral[600]}
        />

        <Text className="heading-secondary text-neutral-600">Sign In</Text>
      </Pressable>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex-1 bg-white p-6 gap-12 rounded-t-3xl"
      >
        <View>
          <Text className="heading-primary text-primary-100">Welcome Back</Text>
          <Text className="caption-secondary text-neutral-100">
            Hello there, sign in to continue
          </Text>
        </View>

        <Image
          source={setting.safe}
          className="w-4/5 h-48 mx-auto"
          resizeMode="contain"
        />

        <View className="gap-4">
          <TextInput
            keyboardType="numeric"
            placeholder="Account"
            className="h-14 px-4 border body-tertiary border-neutral-400 rounded-2xl"
            onChangeText={(text) => setUser({ ...user, account: text })}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            className="h-14 px-4 border body-tertiary border-neutral-400 rounded-2xl"
            onChangeText={(text) => setUser({ ...user, password: text })}
          />
          <Pressable className="items-end">
            <Text className="caption-secondary text-neutral-400">
              Forgot your password?
            </Text>
          </Pressable>
        </View>

        <Pressable
          className={`h-14 items-center justify-center rounded-2xl ${
            user.account && user.password ? "bg-primary-100" : "bg-primary-400"
          }`}
          onPress={onLogin}
        >
          <Text className="body-primary text-neutral-600">Sign In</Text>
        </Pressable>

        <Pressable>
          <Image
            source={setting.fingerprint}
            className="size-16 mx-auto"
            resizeMode="contain"
          />
        </Pressable>

        <Pressable
          className="flex-row items-center justify-center gap-2"
          onPress={() => router.push("/sign-up")}
        >
          <Text className="body-secondary text-neutral-100">
            Don't have an account?
          </Text>

          <Text className="caption-primary text-primary-100">Sign Up</Text>
        </Pressable>
      </ScrollView>
    </>
  );
}
