import { country, icon } from "@/constants/assets";
import colors from "@/constants/colors";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Fragment, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const languages = [
  { name: "Vietnamese", icon: country.VN },
  { name: "French", icon: country.FR },
  { name: "English", icon: country.EN },
  { name: "Japanese", icon: country.JP },
  { name: "Portuguese", icon: country.PT },
  { name: "Chinese", icon: country.CN },
  { name: "Korea", icon: country.KR },
  { name: "Nicaragua", icon: country.NI },
  { name: "Russia", icon: country.RU },
  { name: "Argentina", icon: country.AR },
  { name: "Austria", icon: country.AT },
  { name: "India", icon: country.IN },
  { name: "Ukraine", icon: country.UA },
];

export default function Language() {
  const [checkLanguage, setCheckLanguage] = useState("Chinese");

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

        <Text className="heading-secondary text-neutral-100">Language</Text>
      </Pressable>

      <View className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false}>
          {languages.map((it, idx) => (
            <Fragment key={it.name}>
              {!!idx && <View className="h-[1px] bg-neutral-500"></View>}

              <Pressable
                className="py-4 flex-row justify-between items-center"
                onPress={() => setCheckLanguage(it.name)}
              >
                <View className="flex-row gap-4 items-center">
                  <Image
                    source={it.icon}
                    className="w-10 h-8"
                    resizeMode="contain"
                  />

                  <Text
                    className={`body-primary ${
                      checkLanguage === it.name
                        ? "text-neutral-100"
                        : "text-neutral-300"
                    }`}
                  >
                    {it.name}
                  </Text>
                </View>

                {checkLanguage === it.name && (
                  <Image
                    source={icon.icon06}
                    className="size-4"
                    tintColor={colors.primary[100]}
                  />
                )}
              </Pressable>
            </Fragment>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
