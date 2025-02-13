import { icon } from "@/constants/assets";
import colors from "@/constants/colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { NavigationRoute, ParamListBase } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

const tabs = {
  home: { label: "Home", icon: icon.icon24, iconActive: icon.icon45 },
  search: { label: "Search", icon: icon.icon44, iconActive: icon.icon44 },
  message: { label: "Message", icon: icon.icon23, iconActive: icon.icon42 },
  setting: { label: "Setting", icon: icon.icon22, iconActive: icon.icon43 },
};

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const activeIdx = state.index;
  const { routes } = state;

  const onPress = (
    route: NavigationRoute<ParamListBase, string>,
    isFocused: boolean
  ) => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };
  const onLongPress = (route: NavigationRoute<ParamListBase, string>) => {
    navigation.emit({
      type: "tabLongPress",
      target: route.key,
    });
  };

  return (
    <View className="h-24 flex-row bg-neutral-600">
      {routes.map((it, idx) => (
        <Pressable
          key={it.key}
          onPress={() => onPress(it, activeIdx === idx)}
          onLongPress={() => onLongPress(it)}
          className="flex-1 h-full pt-5 items-center"
        >
          <View
            className={`flex-row py-2 px-4 gap-2 items-center rounded-full ${
              activeIdx === idx ? "bg-primary-100" : ""
            }`}
          >
            <Image
              source={
                activeIdx === idx
                  ? tabs[it.name as keyof typeof tabs].iconActive
                  : tabs[it.name as keyof typeof tabs].icon
              }
              className="size-6"
              resizeMode="contain"
              tintColor={
                activeIdx === idx ? colors.neutral[600] : colors.neutral[200]
              }
            />

            {activeIdx === idx && (
              <Text className="text-neutral-600 body-secondary">
                {tabs[it.name as keyof typeof tabs].label}
              </Text>
            )}
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={TabBar}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="message" />
      <Tabs.Screen name="setting" />
    </Tabs>
  );
}
