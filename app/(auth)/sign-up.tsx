import { icon, setting } from "@/constants/assets";
import colors from "@/constants/colors";
import { useGlobalContext } from "@/lib/GlobalContext";
import { router } from "expo-router";
import { useEffect, useState } from "react";
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
  const [user, setUser] = useState({
    email: "",
    account: "",
    password: "",
    agree: false,
  });
  const [agreementError, setAgreementError] = useState(false);
  useEffect(() => {
    setAgreementError(false);
  }, [user]);

  const onRegister = () => {
    if (!user.email || !user.account || !user.password) {
      return;
    }

    if (!user.agree) {
      setAgreementError(true);
      return;
    }

    login(user.account, user.password);
  };

  return (
    <>
      <Pressable
        onPress={() => router.push("/sign-in")}
        className="flex-row px-6 gap-4 items-center"
      >
        <Image
          source={icon.icon39}
          className="size-4"
          resizeMode="contain"
          tintColor={colors.neutral[600]}
        />

        <Text className="heading-secondary text-neutral-600">Sign Up</Text>
      </Pressable>

      <View className="flex-1 bg-neutral-600 rounded-t-3xl">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="p-6 gap-12"
        >
          <View>
            <Text className="heading-primary text-primary-100">
              Welcome to us,
            </Text>
            <Text className="caption-secondary text-neutral-100">
              Hello there, create New account
            </Text>
          </View>

          <Image
            source={setting.user}
            className="w-4/5 h-48 mx-auto"
            resizeMode="contain"
          />

          <View className="gap-4">
            <TextInput
              keyboardType="email-address"
              placeholder="Email"
              className="h-14 px-4 border body-tertiary border-neutral-400 rounded-2xl"
              onChangeText={(text) => setUser({ ...user, email: text })}
            />
            <TextInput
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

            <Pressable
              className="flex-row gap-2 items-start"
              onPress={() => setUser({ ...user, agree: !user.agree })}
            >
              <Image
                source={user.agree ? icon.icon46 : icon.icon47}
                className="size-6"
                resizeMode="contain"
                tintColor={
                  agreementError
                    ? colors.semantic[100]
                    : user.agree
                    ? colors.primary[100]
                    : colors.neutral[400]
                }
              />

              <Text
                className={`body-secondary ${
                  agreementError ? "text-semantic-100" : "text-neutral-100"
                }`}
              >
                By creating an account your agree to our{" "}
                <Text
                  className={`caption-primary ${
                    agreementError ? "text-semantic-100" : "text-primary-100"
                  }`}
                >
                  Term and Conditions
                </Text>
              </Text>
            </Pressable>
          </View>

          <Pressable
            className={`h-14 items-center justify-center rounded-2xl ${
              user.email && user.account && user.password
                ? "bg-primary-100"
                : "bg-primary-400"
            }`}
            onPress={onRegister}
          >
            <Text className="body-primary text-neutral-600">Sign Up</Text>
          </Pressable>

          <Pressable
            className="flex-row items-center justify-center gap-2"
            onPress={() => router.push("/sign-in")}
          >
            <Text className="body-secondary text-neutral-100">
              Have an account?
            </Text>

            <Text className="caption-primary text-primary-100">Sign In</Text>
          </Pressable>
        </ScrollView>
      </View>
    </>
  );
}
