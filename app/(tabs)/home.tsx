import { card, category, icon, images } from "@/constants/assets";
import colors from "@/constants/colors";
import { useGlobalContext } from "@/lib/GlobalContext";
import { getScreen } from "@/lib/utils";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";

const screenWidth = getScreen().width;
const gap = 24;
const viewWidth = (screenWidth - 2 * gap - gap * 2) / 3;

const tab = [
  { title: "Account and Card", icon: category.wallet },
  { title: "Transfer", icon: category.syncDevices },
  { title: "Withdraw", icon: category.creditCardIn },
  { title: "Mobile prepaid", icon: category.mobileBanking },
  { title: "Pay the bill", icon: category.receipt },
  { title: "Save online", icon: category.pig },
  { title: "Credit card", icon: category.creditCard },
  { title: "Transaction report", icon: category.fileParagraph },
  { title: "Beneficiary", icon: category.contacts },
];

export default function Home() {
  const { user } = useGlobalContext();
  const [cardInfo, setCardInfo] = useState({
    name: "John Smith",
    platform: "Amazon Platinium",
    number: "234564676536829",
    money: 4563546,
  });

  return (
    <View className="bg-primary-100 h-full pt-20 gap-6">
      <View className="flex-row px-6 gap-4 items-center justify-between">
        <View className="flex-row gap-4 items-center">
          <Image
            source={images.account}
            resizeMode="contain"
            className="size-12"
          />

          <Text className="heading-secondary text-neutral-600">
            Hi, {user?.account}
          </Text>
        </View>

        <Pressable onPress={() => router.push("/message")}>
          <Image
            source={icon.icon34}
            className="size-6"
            resizeMode="contain"
            tintColor={colors.neutral[600]}
          />
        </Pressable>
      </View>

      <View className="flex-1 rounded-t-3xl bg-neutral-600">
        <FlatList
          numColumns={3}
          showsVerticalScrollIndicator={false}
          columnWrapperClassName="gap-6"
          contentContainerClassName="flex gap-6"
          className="p-6"
          data={tab}
          keyExtractor={(item) => item.title}
          ListHeaderComponent={
            <View>
              <View className="rounded-3xl overflow-hidden">
                <ImageBackground source={card.card1} className="p-6 gap-6">
                  <Text className="heading-primary text-neutral-600">
                    {cardInfo.name}
                  </Text>
                  <Text className="body-primary text-neutral-600 mt-4">
                    {cardInfo.platform}
                  </Text>
                  <Text className="body-secondary text-neutral-600">
                    {cardInfo.number}
                  </Text>
                  <Text className="heading-secondary text-neutral-600">
                    {cardInfo.money}
                  </Text>
                </ImageBackground>
              </View>
              <View className="h-2 w-[88%] mx-auto rounded-b-3xl bg-semantic-100"></View>
              <View className="h-2 w-[80%] mx-auto rounded-b-3xl bg-semantic-200"></View>
            </View>
          }
          renderItem={({ item }) => (
            <Pressable className="flex-1 card-effect-sm rounded-2xl items-center justify-between p-6 gap-4">
              <Image
                source={item.icon}
                className="size-7"
                resizeMode="contain"
              />
              <Text className="caption-secondary text-neutral-200 text-center">
                {item.title}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}
