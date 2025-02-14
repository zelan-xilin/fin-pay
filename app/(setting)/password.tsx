import { icon } from "@/constants/assets";
import colors from "@/constants/colors";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Password() {
  const [password, setPassword] = useState({
    recentPwd: "",
    newPwd: "",
    confirmPwd: "",
  });
  const onSend = () => {};

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

        <Text className="heading-secondary text-neutral-100">Password</Text>
      </Pressable>

      <View className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="card-effect rounded-3xl p-6 gap-4">
            <View className="gap-2">
              <Text className="caption-primary text-neutral-200">
                Recent password
              </Text>
              <TextInput
                secureTextEntry
                className={`h-14 px-4 border body-tertiary rounded-2xl border-neutral-400`}
                onChangeText={(val) =>
                  setPassword({ ...password, recentPwd: val })
                }
              />
            </View>

            <View className="gap-2">
              <Text className="caption-primary text-neutral-200">
                New password
              </Text>
              <TextInput
                secureTextEntry
                className={`h-14 px-4 border body-tertiary rounded-2xl border-neutral-400`}
                onChangeText={(val) =>
                  setPassword({ ...password, newPwd: val })
                }
              />
            </View>

            <View className="gap-2">
              <Text className="caption-primary text-neutral-200">
                Confirm password
              </Text>
              <TextInput
                secureTextEntry
                className={`h-14 px-4 border body-tertiary rounded-2xl border-neutral-400`}
                onChangeText={(val) =>
                  setPassword({ ...password, confirmPwd: val })
                }
              />
            </View>

            <Pressable
              className={`h-14 mt-12 items-center justify-center rounded-2xl ${
                password.recentPwd && password.newPwd && password.confirmPwd
                  ? "bg-primary-100"
                  : "bg-primary-400"
              }`}
              disabled={
                !password.recentPwd || !password.newPwd || !password.confirmPwd
              }
              onPress={onSend}
            >
              <Text className="body-primary text-neutral-600">
                Change password
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
